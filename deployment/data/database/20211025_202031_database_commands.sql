ALTER TABLE "amap$amapmarker" RENAME TO "1cc5e520ba144c95bb7b3b25514d2f56";
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '3135e78a-f017-44ba-afde-b055c05ec22a';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '3135e78a-f017-44ba-afde-b055c05ec22a';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '3135e78a-f017-44ba-afde-b055c05ec22a');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '3135e78a-f017-44ba-afde-b055c05ec22a';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '3135e78a-f017-44ba-afde-b055c05ec22a';
DROP TABLE "1cc5e520ba144c95bb7b3b25514d2f56";
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20211025 20:20:31';
