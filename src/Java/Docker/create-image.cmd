docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ctvmz11-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t ctvmz11-java/app ../../..
