ALTER TABLE "graph$customer" ADD "nodetype" VARCHAR_IGNORECASE(200) NULL;
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('7aefe0b5-9aed-4124-9af7-a4433611d3a9', 
'e6a28094-8118-4bfb-9b40-1260ff67bd63', 
'NodeType', 
'nodetype', 
30, 
200, 
'', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20211110 10:30:24';
