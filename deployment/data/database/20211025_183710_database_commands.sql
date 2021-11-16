ALTER TABLE "myfirstmodule$amapmarker" RENAME TO "31bcdb98e1814d54949ab5678dd7ade8";
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '6100b6e3-9f21-4357-856b-b4dc08bb6a5f';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '6100b6e3-9f21-4357-856b-b4dc08bb6a5f';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '6100b6e3-9f21-4357-856b-b4dc08bb6a5f');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '6100b6e3-9f21-4357-856b-b4dc08bb6a5f';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '6100b6e3-9f21-4357-856b-b4dc08bb6a5f';
CREATE TABLE "amap$amapmarker" (
	"id" BIGINT NOT NULL,
	"lat" DECIMAL(28, 8) NULL,
	"lng" DECIMAL(28, 8) NULL,
	"title" VARCHAR_IGNORECASE(200) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('3135e78a-f017-44ba-afde-b055c05ec22a', 
'AMap.AMapMarker', 
'amap$amapmarker', 
false, 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('864903a9-7515-4b5b-aad3-d5d52638bb24', 
'3135e78a-f017-44ba-afde-b055c05ec22a', 
'Lat', 
'lat', 
5, 
0, 
'0', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('997d87a6-3ec7-4a8d-90f8-5c474c5915ab', 
'3135e78a-f017-44ba-afde-b055c05ec22a', 
'Lng', 
'lng', 
5, 
0, 
'0', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('576ddd2b-8650-45fc-82e2-0a7032bed14b', 
'3135e78a-f017-44ba-afde-b055c05ec22a', 
'Title', 
'title', 
30, 
200, 
'', 
false);
DROP TABLE "31bcdb98e1814d54949ab5678dd7ade8";
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20211025 18:37:10';
