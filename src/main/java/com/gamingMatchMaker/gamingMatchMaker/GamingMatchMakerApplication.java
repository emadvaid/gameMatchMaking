package com.gamingMatchMaker.gamingMatchMaker;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@SpringBootApplication
public class GamingMatchMakerApplication {

	@Value("${spring.datasource.driver-class-name}")
	private String jdbcDriverClassName;

	@Value("${spring.datasource.url}")
	private String jdbcUrl;

	@Value("${spring.datasource.username}")
	private String jdbcUsername;

	@Value("${spring.datasource.password}")
	private String jdbcPassword;

	public static void main(String[] args) {
		SpringApplication.run(GamingMatchMakerApplication.class, args);
	}

	@Bean
	public DataSource mySQLDataSource() {
		//System.out.println(jdbcDriverClassName + jdbcUrl + jdbcUsername);
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(jdbcDriverClassName);
		dataSource.setUrl(jdbcUrl);
		dataSource.setUsername(jdbcUsername);
		dataSource.setPassword(jdbcPassword);

		return dataSource;
	}
}
