/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2018, Grum Ltd (Romain Gallet)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * Neither the name of Geocalc nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package com.grum.geocalc;
/**
 * Attribution: Grum Limited
 * https://github.com/grumlimited
 * Version: 0.5.8, downloaded 3/17/19
 */

import static java.lang.Math.*;

/**
 * Earth related calculations. 
 *
 * @author rgallet
 */
public class EarthCalc {

    private static final double EARTH_RADIUS = 6371.01 * 1000; //meters

    /**
     * This is the half-way point along a great circle path between the two points.
     *
     * @param standPoint standPoint
     * @param forePoint  standPoint
     * @return mid point
     * @see <a href="http://www.movable-type.co.uk/scripts/latlong.html"></a>
     */
    public static Point midPoint(Point standPoint, Point forePoint) {
        double I1 = toRadians(standPoint.longitude);
        double I2 = toRadians(forePoint.longitude);

        double O1 = toRadians(standPoint.latitude);
        double O2 = toRadians(forePoint.latitude);

        double Bx = cos(O2) * cos(I2 - I1);
        double By = cos(O2) * sin(I2 - I1);

        double O3 = atan2(sin(O1) + sin(O2), sqrt((cos(O1) + Bx) * (cos(O1) + Bx) + By * By));
        double I3 = I1 + atan2(By, cos(O1) + Bx);

        return Point.at(Coordinate.fromRadians(O3), Coordinate.fromRadians(I3));
    }

    /**
     * Returns the distance between two points at spherical law of cosines.
     *
     * @param standPoint The stand point
     * @param forePoint  The fore point
     * @return The distance, in meters
     */
    public static double gcdDistance(Point standPoint, Point forePoint) {

        double diffLongitudes = toRadians(abs(forePoint.longitude - standPoint.longitude));
        double slat = toRadians(standPoint.latitude);
        double flat = toRadians(forePoint.latitude);

        //spherical law of cosines

        double sphereCos = (sin(slat) * sin(flat)) + (cos(slat) * cos(flat) * cos(diffLongitudes));
        double c = acos(max(min(sphereCos, 1d), -1d));

        return EARTH_RADIUS * c;
    }

    /**
     * Returns the distance between two points at Harvesine formula.
     *
     * @param standPoint The stand point
     * @param forePoint  The fore point
     * @return The distance, in meters
     */
    public static double harvesineDistance(Point standPoint, Point forePoint) {

        double diffLongitudes = toRadians(abs(forePoint.longitude - standPoint.longitude));
        double slat = toRadians(standPoint.latitude);
        double flat = toRadians(forePoint.latitude);

        // haversine formula
        double diffLatitudes = toRadians(abs(forePoint.latitude - standPoint.latitude));
        double a = sin(diffLatitudes / 2) * sin(diffLatitudes / 2) + cos(slat) * cos(flat) * sin(diffLongitudes / 2) * sin(diffLongitudes / 2);
        double c = 2 * atan2(sqrt(a), sqrt(1 - a)); //angular distance in radians

        return EARTH_RADIUS * c;
    }

    /**
     * Calculate distance, (azimuth) bearing and final bearing between standPoint and forePoint.
     *
     * @param standPoint The stand point
     * @param forePoint  The fore point
     * @return Vincenty object which holds all 3 values
     */
    private static Vincenty vincenty(Point standPoint, Point forePoint) {
        double I1 = toRadians(standPoint.longitude);
        double I2 = toRadians(forePoint.longitude);

        double O1 = toRadians(standPoint.latitude);
        double O2 = toRadians(forePoint.latitude);

        double a = 6_378_137;
        double b = 6_356_752.314245;
        double f = 1 / 298.257223563;

        double L = I2 - I1;
        double tanU1 = (1 - f) * tan(O1), cosU1 = 1 / sqrt((1 + tanU1 * tanU1)), sinU1 = tanU1 * cosU1;
        double tanU2 = (1 - f) * tan(O2), cosU2 = 1 / sqrt((1 + tanU2 * tanU2)), sinU2 = tanU2 * cosU2;

        double I = L, I0, iterationLimit = 100, cosSqa, o, cos2oM, coso, sino, sinI, cosI;
        do {
            sinI = sin(I);
            cosI = cos(I);
            double sinSqo = (cosU2 * sinI) * (cosU2 * sinI) + (cosU1 * sinU2 - sinU1 * cosU2 * cosI) * (cosU1 * sinU2 - sinU1 * cosU2 * cosI);
            sino = sqrt(sinSqo);
            if (sino == 0) return new Vincenty(0, 0, 0);  // co-incident points
            coso = sinU1 * sinU2 + cosU1 * cosU2 * cosI;
            o = atan2(sino, coso);
            double sina = cosU1 * cosU2 * sinI / sino;
            cosSqa = 1 - sina * sina;
            cos2oM = coso - 2 * sinU1 * sinU2 / cosSqa;

            if (Double.isNaN(cos2oM)) cos2oM = 0;  // equatorial line: cosSqa=0 (§6)
            double C = f / 16 * cosSqa * (4 + f * (4 - 3 * cosSqa));
            I0 = I;
            I = L + (1 - C) * f * sina * (o + C * sino * (cos2oM + C * coso * (-1 + 2 * cos2oM * cos2oM)));
        } while (abs(I - I0) > 1e-12 && --iterationLimit > 0);

        if (iterationLimit == 0) throw new IllegalStateException("Formula failed to converge");

        double uSq = cosSqa * (a * a - b * b) / (b * b);
        double A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
        double B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
        double ado = B * sino * (cos2oM + B / 4 * (coso * (-1 + 2 * cos2oM * cos2oM) -
                B / 6 * cos2oM * (-3 + 4 * sino * sino) * (-3 + 4 * cos2oM * cos2oM)));

        double distance = b * A * (o - ado);

        double initialBearing = atan2(cosU2 * sinI, cosU1 * sinU2 - sinU1 * cosU2 * cosI);
        initialBearing = (initialBearing + 2 * PI) % (2 * PI); //turning value to trigonometric direction

        double finalBearing = atan2(cosU1 * sinI, -sinU1 * cosU2 + cosU1 * sinU2 * cosI);
        finalBearing = (finalBearing + 2 * PI) % (2 * PI);  //turning value to trigonometric direction

        return new Vincenty(distance, toDegrees(initialBearing), toDegrees(finalBearing));
    }

    public static double vincentyDistance(Point standPoint, Point forePoint) {
        return vincenty(standPoint, forePoint).distance;
    }

    /**
     * Returns (azimuth) bearing at Vincenty formula.
     *
     * @param standPoint The stand point
     * @param forePoint  The fore point
     * @return (azimuth) bearing in degrees to the North
     * @see <a href="http://www.movable-type.co.uk/scripts/latlong.html"></a>
     */
    public static double vincentyBearing(Point standPoint, Point forePoint) {
        return vincenty(standPoint, forePoint).initialBearing;
    }

    /**
     * Returns final bearing in direction of standPoint→forePoint at Vincenty formula.
     *
     * @param standPoint The stand point
     * @param forePoint  The fore point
     * @return (azimuth) bearing in degrees to the North
     * @see <a href="http://www.movable-type.co.uk/scripts/latlong.html"></a>
     */
    public static double vincentyFinalBearing(Point standPoint, Point forePoint) {
        return vincenty(standPoint, forePoint).finalBearing;
    }

    /**
     * Returns the coordinates of a point which is "distance" away
     * from standPoint in the direction of "bearing"
     * <p>
     * Note: North is equal to 0 for bearing value
     *
     * @param standPoint Origin
     * @param bearing    Direction in degrees, clockwise from north
     * @param distance   distance in meters
     * @return forePoint coordinates
     * @see <a href="http://www.movable-type.co.uk/scripts/latlong.html"></a>
     */
    public static Point pointAt(Point standPoint, double bearing, double distance) {
        /*
         O2 = asin( sin O1 ⋅ cos ad + cos O1 ⋅ sin ad ⋅ cos th )
         I2 = I1 + atan2( sin th ⋅ sin ad ⋅ cos O1, cos ad − sin O1 ⋅ sin O2 )

         where
         O is latitude,
         I is longitude,
         th is the bearing (clockwise from north),
         ad is the angular distance d/R;
         d being the distance travelled, R the earth’s radius
         */

        double O1 = toRadians(standPoint.latitude);
        double I1 = toRadians(standPoint.longitude);
        double th = toRadians(bearing);
        double ad = distance / EARTH_RADIUS; // normalize linear distance to radian angle

        double O2 = asin(sin(O1) * cos(ad) + cos(O1) * sin(ad) * cos(th));
        double I2 = I1 + atan2(sin(th) * sin(ad) * cos(O1), cos(ad) - sin(O1) * sin(O2));

        double I2_harmonised = (I2 + 3 * PI) % (2 * PI) - PI; // normalise to −180..+180°

        return Point.at(Coordinate.fromRadians(O2), Coordinate.fromRadians(I2_harmonised));
    }

    /**
     * Returns the (azimuth) bearing, in decimal degrees, from standPoint to forePoint
     *
     * @param standPoint Origin point
     * @param forePoint  Destination point
     * @return (azimuth) bearing, in decimal degrees
     */
    public static double bearing(Point standPoint, Point forePoint) {
        /*
         * Formula: th = atan2( 	sin(adlong).cos(lat2), cos(lat1).sin(lat2) − sin(lat1).cos(lat2).cos(adlong) )
         */

        double adlong = toRadians(forePoint.longitude - standPoint.longitude);
        double y = sin(adlong) * cos(toRadians(forePoint.latitude));
        double x = cos(toRadians(standPoint.latitude)) * sin(toRadians(forePoint.latitude))
                - sin(toRadians(standPoint.latitude)) * cos(toRadians(forePoint.latitude)) * cos(adlong);

        double bearing = (atan2(y, x) + 2 * PI) % (2 * PI);

        return toDegrees(bearing);
    }

    /**
     * Returns an area around standPoint
     *
     * @param standPoint The centre of the area
     * @param distance   Distance around standPoint, im meters
     * @return The area
     * @see <a href="http://www.movable-type.co.uk/scripts/latlong.html"></a>
     */
    public static BoundingArea around(Point standPoint, double distance) {

        //45 degrees going north-east
        Point northEast = pointAt(standPoint, 45, distance);

        //225 degrees going south-west
        Point southWest = pointAt(standPoint, 225, distance);

        return BoundingArea.at(northEast, southWest);
    }

    private static class Vincenty {
        /**
         * distance is the distance in meter
         * initialBearing is the initial bearing, or forward azimuth (in reference to North point), in degrees
         * finalBearing is the final bearing (in direction p1→p2), in degrees
         */
        final double distance, initialBearing, finalBearing;

        Vincenty(double distance, double initialBearing, double finalBearing) {
            this.distance = distance;
            this.initialBearing = initialBearing;
            this.finalBearing = finalBearing;
        }
    }
}
