ALTER TABLE "graph$edge" ADD "cluster" VARCHAR_IGNORECASE(200) NULL;
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('a6604b2b-bf90-429f-8a71-3be39ddd6e65', 
'e9681a23-4bd0-4b94-ab51-b2ce71da0b49', 
'Cluster', 
'cluster', 
30, 
200, 
'', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20211105 17:52:13';
