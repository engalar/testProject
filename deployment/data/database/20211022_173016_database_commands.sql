UPDATE "mendixsystem$entity"
 SET "entity_name" = 'FileViewer.Entity', 
"table_name" = 'fileviewer$entity', 
"superentity_id" = '170ce49d-f29c-4fac-99a6-b55e8a3aeb39', 
"remote" = false, 
"remote_primary_key" = false
 WHERE "id" = '15ce4ed4-7c39-43e3-9fea-60b825f3bb84';
INSERT INTO "system$filedocument" ("id", 
"submetaobjectname", 
"fileid", 
"deleteafterdownload", 
"hascontents", 
"size", 
"__filename__")
SELECT "id", 
'FileViewer.Entity', 
NEXT VALUE FOR "system$filedocument_fileid_mxseq", 
false, 
false, 
-1, 
0
 FROM "fileviewer$entity"
 ORDER BY "id" ASC;
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20211022 17:30:16';
