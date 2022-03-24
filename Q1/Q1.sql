CREATE TABLE countries (
    code CHAR(2) NOT NULL,
    year INT NOT NULL,
    gdp_per_capita DECIMAL(10, 2) NOT NULL,
    govt_debt DECIMAL(10, 2) NOT NULL
);

SELECT code,
    (SUM(govt_debt)/SUM(gdp_per_capita)) as 'avg_govt_debt_over_gdp_per_capita' 
FROM countries
WHERE gdp_per_capita >= 400000 
AND (year = 2021 OR year = 2020 OR year = 2019 OR year = 2018)
GROUP BY code
ORDER BY AVG(govt_debt) DESC
LIMIT 3