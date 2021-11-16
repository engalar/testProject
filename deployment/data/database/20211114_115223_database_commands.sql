ALTER TABLE "system$workflowdefinition" DROP CONSTRAINT "uniq_system$workflowdefinition_modelguid";
ALTER TABLE "system$workflowdefinition" RENAME TO "b1d15e3e1034404ebdeeae240b3d4ee1";
ALTER TABLE "system$workflowdefinition_currentworkflowversion" DROP CONSTRAINT "uniq_system$workflowdefinition_currentworkflowversion_system$workflowdefinitionid";
DROP INDEX "idx_system$workflowdefinition_currentworkflowversion_system$workflowversion_system$workflowdefinition";
ALTER TABLE "system$workflowdefinition_currentworkflowversion" RENAME TO "a515589e34c04e11ac53cc4ee6a113fc";
ALTER TABLE "system$workflowversion" RENAME TO "0372a21dfc794338b4b5c875200b54ba";
ALTER TABLE "system$workflowversion_previousversion" DROP CONSTRAINT "uniq_system$workflowversion_previousversion_system$workflowversionid1";
DROP INDEX "idx_system$workflowversion_previousversion_system$workflowversion_system$workflowversion";
ALTER TABLE "system$workflowversion_previousversion" RENAME TO "c993bcfc4b84429189db5a735f3e56b8";
DROP INDEX "idx_system$workflowversion_taskdefinition_system$workflowtaskdefinition_system$workflowversion";
ALTER TABLE "system$workflowversion_taskdefinition" RENAME TO "52f2996c48404918a84824957658e636";
ALTER TABLE "system$workflowversion_workflowdefinition" DROP CONSTRAINT "uniq_system$workflowversion_workflowdefinition_system$workflowversionid";
DROP INDEX "idx_system$workflowversion_workflowdefinition_system$workflowdefinition_system$workflowversion";
ALTER TABLE "system$workflowversion_workflowdefinition" RENAME TO "ac29d1c691264b8fa0f0605b2feb4dea";
DROP INDEX "idx_system$workflowinstance_system$owner";
ALTER TABLE "system$workflowinstance" RENAME TO "cefeabb7b6ff4339abb8bd93be4c302c";
DROP INDEX "idx_system$workflowinstance_currentactivity_system$workflowactivity_system$workflowinstance";
ALTER TABLE "system$workflowinstance_currentactivity" RENAME TO "005cbb83beeb4829b533ae05d7b6cf7e";
ALTER TABLE "system$workflowinstance_workflowcontext" DROP CONSTRAINT "uniq_system$workflowinstance_workflowcontext_system$workflowinstanceid";
ALTER TABLE "system$workflowinstance_workflowcontext" DROP CONSTRAINT "uniq_system$workflowinstance_workflowcontext_system$workflowcontextid";
DROP INDEX "idx_system$workflowinstance_workflowcontext_system$workflowcontext_system$workflowinstance";
ALTER TABLE "system$workflowinstance_workflowcontext" RENAME TO "e19e0671d96448acbb9d5dbbfbad4645";
ALTER TABLE "system$workflowinstance_workflowdefinition" DROP CONSTRAINT "uniq_system$workflowinstance_workflowdefinition_system$workflowinstanceid";
DROP INDEX "idx_system$workflowinstance_workflowdefinition_system$workflowdefinition_system$workflowinstance";
ALTER TABLE "system$workflowinstance_workflowdefinition" RENAME TO "e19664eb5a6c4881aa29cd7f44779002";
ALTER TABLE "system$workflowsystemtask" RENAME TO "2ab5616ef0cb4370bf269c2328dd3632";
DROP INDEX "idx_system$workflowcontext_system$changedby";
DROP INDEX "idx_system$workflowcontext_system$owner";
ALTER TABLE "system$workflowcontext" RENAME TO "c61eaa6d901245169de45985793e413a";
DROP INDEX "idx_system$workflowtaskinstance_submetaobjectname_asc";
ALTER TABLE "system$workflowtaskinstance" RENAME TO "3e0492d612054453ae0dbc07139e27e1";
ALTER TABLE "system$taskinstance_workflowinstance" DROP CONSTRAINT "uniq_system$taskinstance_workflowinstance_system$workflowtaskinstanceid";
DROP INDEX "idx_system$taskinstance_workflowinstance_system$workflowinstance_system$workflowtaskinstance";
ALTER TABLE "system$taskinstance_workflowinstance" RENAME TO "894ad6a95aad47d9b67de22130aca739";
ALTER TABLE "system$taskinstance_taskdefinition" DROP CONSTRAINT "uniq_system$taskinstance_taskdefinition_system$workflowtaskinstanceid";
DROP INDEX "idx_system$taskinstance_taskdefinition_system$workflowtaskdefinition_system$workflowtaskinstance";
ALTER TABLE "system$taskinstance_taskdefinition" RENAME TO "1991ed7005584993b08422b3edd25c14";
ALTER TABLE "system$workflowusertask" RENAME TO "99ac53c25f5941d4b8a47862873ae67c";
DROP INDEX "idx_system$workflowusertask_targetusers_system$user_system$workflowusertask";
ALTER TABLE "system$workflowusertask_targetusers" RENAME TO "878a398f68684921886a2cc674104058";
ALTER TABLE "system$workflowusertask_assignee" DROP CONSTRAINT "uniq_system$workflowusertask_assignee_system$workflowusertaskid";
DROP INDEX "idx_system$workflowusertask_assignee_system$user_system$workflowusertask";
ALTER TABLE "system$workflowusertask_assignee" RENAME TO "974e183459eb4a66835bc07ded91dd0d";
ALTER TABLE "system$workflowactivity" RENAME TO "c0bb325902584d0aa58fcc439ec33fb8";
ALTER TABLE "system$workflowactivity_workflowversion" DROP CONSTRAINT "uniq_system$workflowactivity_workflowversion_system$workflowactivityid";
DROP INDEX "idx_system$workflowactivity_workflowversion_system$workflowversion_system$workflowactivity";
ALTER TABLE "system$workflowactivity_workflowversion" RENAME TO "902a99bfb5d843e88d3c7a6c5a7dd94d";
ALTER TABLE "system$workflowactivity_workflowinstance" DROP CONSTRAINT "uniq_system$workflowactivity_workflowinstance_system$workflowactivityid";
DROP INDEX "idx_system$workflowactivity_workflowinstance_system$workflowinstance_system$workflowactivity";
ALTER TABLE "system$workflowactivity_workflowinstance" RENAME TO "cc668c6cf0274bc69cc3c0d413fbdad1";
DROP INDEX "idx_system$workflowactivity_previousactivity_system$workflowactivity_system$workflowactivity";
ALTER TABLE "system$workflowactivity_previousactivity" RENAME TO "f476d96a2090428c8b6be97ec7a18f0d";
ALTER TABLE "system$workflowactivity_taskinstance" DROP CONSTRAINT "uniq_system$workflowactivity_taskinstance_system$workflowactivityid";
DROP INDEX "idx_system$workflowactivity_taskinstance_system$workflowtaskinstance_system$workflowactivity";
ALTER TABLE "system$workflowactivity_taskinstance" RENAME TO "c5b0e5d0a5254091a5f5c6afad361e3c";
ALTER TABLE "system$workflowtaskdefinition" RENAME TO "7ce7a09dd2da47c587dc0951ce6902c4";
ALTER TABLE "system$taskdefinition_workflowdefinition" DROP CONSTRAINT "uniq_system$taskdefinition_workflowdefinition_system$workflowtaskdefinitionid";
DROP INDEX "idx_system$taskdefinition_workflowdefinition_system$workflowdefinition_system$workflowtaskdefinition";
ALTER TABLE "system$taskdefinition_workflowdefinition" RENAME TO "20e0e556d164496fb9edc40b666d94d3";
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '02d51bf5-6fad-4d53-868d-9366732968c1';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '02d51bf5-6fad-4d53-868d-9366732968c1';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '02d51bf5-6fad-4d53-868d-9366732968c1');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '02d51bf5-6fad-4d53-868d-9366732968c1';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '02d51bf5-6fad-4d53-868d-9366732968c1';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowdefinition_modelguid' AND "column_id" = 'a0c664f6-b514-4150-891e-34583eddeca0';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '3ebbec61-8d41-400a-bb8c-901158f2440b';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowdefinition_currentworkflowversion_system$workflowdefinitionid' AND "column_id" = '385c3019-3deb-31af-a22a-ff964b0d33ef';
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '06501a2e-a29e-4e42-bb99-3b45be716079';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '06501a2e-a29e-4e42-bb99-3b45be716079';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '06501a2e-a29e-4e42-bb99-3b45be716079');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '06501a2e-a29e-4e42-bb99-3b45be716079';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '06501a2e-a29e-4e42-bb99-3b45be716079';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '17aa315b-1576-4dd5-9b90-2c286717e27b';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowversion_previousversion_system$workflowversionid1' AND "column_id" = 'e6d0b87d-234f-3989-9d8d-783ab9b86811';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '3ffcbf28-6f71-4d2c-9e06-30590e5c1834';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = 'e5a8cc4f-8434-4454-8c8c-b06682938883';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowversion_workflowdefinition_system$workflowversionid' AND "column_id" = '63553733-e516-3ff2-9023-3fc64430802e';
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '0bdec1c4-0500-467e-a6f7-5ad52fda4db4';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '0bdec1c4-0500-467e-a6f7-5ad52fda4db4';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '0bdec1c4-0500-467e-a6f7-5ad52fda4db4');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '0bdec1c4-0500-467e-a6f7-5ad52fda4db4';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '0bdec1c4-0500-467e-a6f7-5ad52fda4db4';
DELETE FROM "mendixsystem$index" 
 WHERE "table_id" = '0bdec1c4-0500-467e-a6f7-5ad52fda4db4';
DELETE FROM "mendixsystem$index_column" 
 WHERE "index_id" IN ('542c9489-d67c-3520-a6ff-82ad35f37fb5');
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '3501d53b-7e89-3a04-b928-6c4c6dd7f450';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '2d11ff24-7c77-4f7e-a1e4-b307d6fd309b';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '97a8df1e-d9ee-41ba-92f4-8b3dc262a32d';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowinstance_workflowcontext_system$workflowinstanceid' AND "column_id" = '7879565e-7529-38fe-8db4-ffdc2468fe59';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowinstance_workflowcontext_system$workflowcontextid' AND "column_id" = 'a6deb5d4-243e-31fe-8519-12f7291159a2';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = 'e40c96ef-b6e4-47df-87c6-17d16102a4c7';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowinstance_workflowdefinition_system$workflowinstanceid' AND "column_id" = 'c16f925c-7828-3b50-95ec-ebddb60a31ec';
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '4153f6f9-12c8-4327-b48b-76d7d3398d2d';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '4153f6f9-12c8-4327-b48b-76d7d3398d2d';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '4153f6f9-12c8-4327-b48b-76d7d3398d2d');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '4153f6f9-12c8-4327-b48b-76d7d3398d2d';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '4153f6f9-12c8-4327-b48b-76d7d3398d2d';
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '7b69d5b8-cb94-4ffa-920d-e4d70c6be1e6';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '7b69d5b8-cb94-4ffa-920d-e4d70c6be1e6';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '7b69d5b8-cb94-4ffa-920d-e4d70c6be1e6');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '7b69d5b8-cb94-4ffa-920d-e4d70c6be1e6';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '7b69d5b8-cb94-4ffa-920d-e4d70c6be1e6';
DELETE FROM "mendixsystem$index" 
 WHERE "table_id" = '7b69d5b8-cb94-4ffa-920d-e4d70c6be1e6';
DELETE FROM "mendixsystem$index_column" 
 WHERE "index_id" IN ('23c62a4d-db4f-3e98-8df0-1e0f1dcf0a2b', 'fd025034-6f4b-3b65-a312-95affff28f0a');
DELETE FROM "mendixsystem$association" 
 WHERE "id" = 'f3e3e51e-4c3a-3c17-92bc-bbaaf65afbe6';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = 'fc14739c-3cb8-3811-9a87-cbb9e56cc5b9';
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '7f3cb3af-a16f-4cfd-b738-b2f3a8535ecb';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '7f3cb3af-a16f-4cfd-b738-b2f3a8535ecb';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '7f3cb3af-a16f-4cfd-b738-b2f3a8535ecb');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '7f3cb3af-a16f-4cfd-b738-b2f3a8535ecb';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '7f3cb3af-a16f-4cfd-b738-b2f3a8535ecb';
DELETE FROM "mendixsystem$index" 
 WHERE "table_id" = '7f3cb3af-a16f-4cfd-b738-b2f3a8535ecb';
DELETE FROM "mendixsystem$index_column" 
 WHERE "index_id" IN ('95714520-72f9-3b67-be29-9a0b26275af7');
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '3947e77c-80c2-11ea-bc55-0242ac130003';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$taskinstance_workflowinstance_system$workflowtaskinstanceid' AND "column_id" = '23783d5d-1141-32bc-97c7-414081c4c729';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = 'e76fecd3-ce21-48cc-b170-626bcdfb2e65';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$taskinstance_taskdefinition_system$workflowtaskinstanceid' AND "column_id" = 'fe65c820-b4b5-3841-876a-07bea1feab3f';
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '8a736dc8-91c1-48fd-bc12-57920ea8f046';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '8a736dc8-91c1-48fd-bc12-57920ea8f046';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '8a736dc8-91c1-48fd-bc12-57920ea8f046');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '8a736dc8-91c1-48fd-bc12-57920ea8f046';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '8a736dc8-91c1-48fd-bc12-57920ea8f046';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = 'a2383b0d-9ccd-44d6-9491-a01283393297';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = 'f52506ee-39e6-454c-8a8f-0beab98223b7';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowusertask_assignee_system$workflowusertaskid' AND "column_id" = '1182844d-d422-3c3d-b80c-b5698cdc41e6';
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '8ac1e90e-718e-4aba-9942-59820582d7a7';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '8ac1e90e-718e-4aba-9942-59820582d7a7';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '8ac1e90e-718e-4aba-9942-59820582d7a7');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '8ac1e90e-718e-4aba-9942-59820582d7a7';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '8ac1e90e-718e-4aba-9942-59820582d7a7';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '5964a126-1afb-47ba-9cd2-2010342af482';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowactivity_workflowversion_system$workflowactivityid' AND "column_id" = '0ae270ec-5539-35e0-adfc-983de2afae66';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '6ba49c71-58f8-4365-b8ad-4ee9e91c9fb3';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowactivity_workflowinstance_system$workflowactivityid' AND "column_id" = 'a56a1bfd-8cbc-3d73-a31e-60db73e990ee';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '6d9fa67c-cf0d-4b55-a923-eebe0b23b2b1';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = 'd54e6b5d-03dd-4ead-9c40-55e25519fa60';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$workflowactivity_taskinstance_system$workflowactivityid' AND "column_id" = '3996d740-8ad5-3d04-ab9b-a57fc9cfe723';
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '8d213f93-202b-42f7-9ee8-149e6f49ebb4';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '8d213f93-202b-42f7-9ee8-149e6f49ebb4';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '8d213f93-202b-42f7-9ee8-149e6f49ebb4');
DELETE FROM "mendixsystem$remote_primary_key" 
 WHERE "entity_id" = '8d213f93-202b-42f7-9ee8-149e6f49ebb4';
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '8d213f93-202b-42f7-9ee8-149e6f49ebb4';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = 'f1e5de7f-b714-4d1d-ae7a-83e01a9b270e';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_system$taskdefinition_workflowdefinition_system$workflowtaskdefinitionid' AND "column_id" = '8d06b886-5975-3aa2-824f-dab4d0198fb9';
ALTER TABLE "system$queuedtask" ADD "contexttype" VARCHAR_IGNORECASE(9) NULL;
ALTER TABLE "system$queuedtask" ADD "system$owner" BIGINT NULL;
ALTER TABLE "system$queuedtask" ADD "contextdata" VARCHAR_IGNORECASE(2147483647) NULL;
CREATE INDEX "idx_system$queuedtask_system$owner" ON "system$queuedtask" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('d6288735-aea7-416a-91d2-1735aa7c0ea3', 
'c6c131c8-8779-4213-9b26-a64e141f26a8', 
'ContextType', 
'contexttype', 
40, 
9, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('6534293a-7a10-451c-8b3d-a689d3a281f3', 
'c6c131c8-8779-4213-9b26-a64e141f26a8', 
'ContextData', 
'contextdata', 
30, 
0, 
'', 
false);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name")
 VALUES ('f6de554a-f765-3d80-aa59-2b3da4167137', 
'System.owner', 
'system$owner', 
'c6c131c8-8779-4213-9b26-a64e141f26a8', 
'282e2e60-88a5-469d-84a5-ba8d9151644f', 
'id', 
'system$owner');
INSERT INTO "mendixsystem$index" ("id", 
"table_id", 
"index_name")
 VALUES ('8de203bb-c0c1-349b-8aef-037cdb0cd348', 
'c6c131c8-8779-4213-9b26-a64e141f26a8', 
'idx_system$queuedtask_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", 
"column_id", 
"sort_order", 
"ordinal")
 VALUES ('8de203bb-c0c1-349b-8aef-037cdb0cd348', 
'f6de554a-f765-3d80-aa59-2b3da4167137', 
false, 
0);
ALTER TABLE "system$processedqueuetask" ADD "contexttype" VARCHAR_IGNORECASE(9) NULL;
ALTER TABLE "system$processedqueuetask" ADD "system$owner" BIGINT NULL;
ALTER TABLE "system$processedqueuetask" ADD "contextdata" VARCHAR_IGNORECASE(2147483647) NULL;
CREATE INDEX "idx_system$processedqueuetask_system$owner" ON "system$processedqueuetask" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('8e8e6dfa-87a2-413a-89c1-a2b23037b792', 
'eb5c32a1-85ec-49d1-8bca-ecca779cd539', 
'ContextType', 
'contexttype', 
40, 
9, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('7cbcf835-1193-4d91-84f5-40bde9ddb9e4', 
'eb5c32a1-85ec-49d1-8bca-ecca779cd539', 
'ContextData', 
'contextdata', 
30, 
0, 
'', 
false);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name")
 VALUES ('2a2739dd-9160-3616-8999-a7a147bf4cda', 
'System.owner', 
'system$owner', 
'eb5c32a1-85ec-49d1-8bca-ecca779cd539', 
'282e2e60-88a5-469d-84a5-ba8d9151644f', 
'id', 
'system$owner');
INSERT INTO "mendixsystem$index" ("id", 
"table_id", 
"index_name")
 VALUES ('a28ff41f-1610-3353-9957-9e8d776b805e', 
'eb5c32a1-85ec-49d1-8bca-ecca779cd539', 
'idx_system$processedqueuetask_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", 
"column_id", 
"sort_order", 
"ordinal")
 VALUES ('a28ff41f-1610-3353-9957-9e8d776b805e', 
'2a2739dd-9160-3616-8999-a7a147bf4cda', 
false, 
0);
CREATE TABLE "system$workflow" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	"description" VARCHAR_IGNORECASE(2147483647) NULL,
	"starttime" TIMESTAMP NULL,
	"endtime" TIMESTAMP NULL,
	"duedate" TIMESTAMP NULL,
	"canberestarted" BOOLEAN NULL,
	"canbecontinued" BOOLEAN NULL,
	"state" VARCHAR_IGNORECASE(12) NULL,
	"reason" VARCHAR_IGNORECASE(2147483647) NULL,
	"previousstate" VARCHAR_IGNORECASE(12) NULL,
	"system$owner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_system$workflow_system$owner" ON "system$workflow" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'System.Workflow', 
'system$workflow', 
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
 VALUES ('77cf3524-fcfe-40cf-8ac0-b073015550ef', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'Name', 
'name', 
30, 
200, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('8a6b4eb4-9b10-4060-a823-79dd4c19c217', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'Description', 
'description', 
30, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('c627be00-3ea1-4890-9621-d3dad9f11c21', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'StartTime', 
'starttime', 
20, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('59f6ed7a-8e1a-46c5-a288-c60cdd1baf50', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'EndTime', 
'endtime', 
20, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('80796d39-0dde-4af7-b619-53ec9950014b', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'DueDate', 
'duedate', 
20, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('49d88092-1ce9-46e5-baad-b6c22831824d', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'CanBeRestarted', 
'canberestarted', 
10, 
0, 
'false', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('dec2408c-8fea-4232-8208-cad1117ca406', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'CanBeContinued', 
'canbecontinued', 
10, 
0, 
'false', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('ec48ea64-d4ae-42dd-8fbe-6c3716181dc7', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'State', 
'state', 
40, 
12, 
'Paused', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('89e83bbd-6379-4601-89b4-825c02c7de6b', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'Reason', 
'reason', 
30, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('4c70166c-8ebb-4105-a35a-d1e15a82d925', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'PreviousState', 
'previousstate', 
40, 
12, 
'', 
false);
INSERT INTO "mendixsystem$index" ("id", 
"table_id", 
"index_name")
 VALUES ('ac892dd9-fb9e-3590-aaf5-e3e2c7fbc021', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'idx_system$workflow_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", 
"column_id", 
"sort_order", 
"ordinal")
 VALUES ('ac892dd9-fb9e-3590-aaf5-e3e2c7fbc021', 
'2cf6fdd7-e448-3a4d-b70e-6d875c2136d7', 
false, 
0);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name")
 VALUES ('2cf6fdd7-e448-3a4d-b70e-6d875c2136d7', 
'System.owner', 
'system$owner', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'282e2e60-88a5-469d-84a5-ba8d9151644f', 
'id', 
'system$owner');
CREATE TABLE "system$workflow_workflowdefinition" (
	"system$workflowid" BIGINT NOT NULL,
	"system$workflowdefinitionid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowid","system$workflowdefinitionid"),
	CONSTRAINT "uniq_system$workflow_workflowdefinition_system$workflowid" UNIQUE ("system$workflowid"));
CREATE INDEX "idx_system$workflow_workflowdefinition_system$workflowdefinition_system$workflow" ON "system$workflow_workflowdefinition" ("system$workflowdefinitionid" ASC,"system$workflowid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('77c87c19-f28d-4ca3-870c-351722cf5e9e', 
'System.Workflow_WorkflowDefinition', 
'system$workflow_workflowdefinition', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'5c570d3b-7b31-44fe-abd6-269a234584c5', 
'system$workflowid', 
'system$workflowdefinitionid', 
'idx_system$workflow_workflowdefinition_system$workflowdefinition_system$workflow');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflow_workflowdefinition_system$workflowid', 
'77c87c19-f28d-4ca3-870c-351722cf5e9e', 
'593e832a-6cbc-3208-b1a1-06b8b873428f');
CREATE TABLE "system$workflow_currentactivity" (
	"system$workflowid" BIGINT NOT NULL,
	"system$workflowactivityid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowid","system$workflowactivityid"));
CREATE INDEX "idx_system$workflow_currentactivity_system$workflowactivity_system$workflow" ON "system$workflow_currentactivity" ("system$workflowactivityid" ASC,"system$workflowid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('58aa640e-8db7-479b-9f91-2425b009ee06', 
'System.Workflow_CurrentActivity', 
'system$workflow_currentactivity', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'system$workflowid', 
'system$workflowactivityid', 
'idx_system$workflow_currentactivity_system$workflowactivity_system$workflow');
CREATE TABLE "system$workflowusertaskdefinition" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	"isobsolete" BOOLEAN NULL,
	"modelguid" VARCHAR_IGNORECASE(36) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('e09e866f-288b-475c-9465-792cde8b878c', 
'System.WorkflowUserTaskDefinition', 
'system$workflowusertaskdefinition', 
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
 VALUES ('895f51f8-ff84-4694-aa65-1ba19eaeca5e', 
'e09e866f-288b-475c-9465-792cde8b878c', 
'Name', 
'name', 
30, 
200, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('a6f93dd6-2725-4746-8283-c5c1e1f16d3f', 
'e09e866f-288b-475c-9465-792cde8b878c', 
'IsObsolete', 
'isobsolete', 
10, 
0, 
'false', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('015434e4-2727-4ee8-aef4-49d17b16afb1', 
'e09e866f-288b-475c-9465-792cde8b878c', 
'ModelGUID', 
'modelguid', 
30, 
36, 
'', 
false);
CREATE TABLE "system$workflowusertaskdefinition_workflowdefinition" (
	"system$workflowusertaskdefinitionid" BIGINT NOT NULL,
	"system$workflowdefinitionid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowusertaskdefinitionid","system$workflowdefinitionid"),
	CONSTRAINT "uniq_system$workflowusertaskdefinition_workflowdefinition_system$workflowusertaskdefinitionid" UNIQUE ("system$workflowusertaskdefinitionid"));
CREATE INDEX "idx_system$workflowusertaskdefinition_workflowdefinition_system$workflowdefinition_system$workflowusertaskdefinition" ON "system$workflowusertaskdefinition_workflowdefinition" ("system$workflowdefinitionid" ASC,"system$workflowusertaskdefinitionid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('685c576c-19af-4ea7-983d-ece147c1cebc', 
'System.WorkflowUserTaskDefinition_WorkflowDefinition', 
'system$workflowusertaskdefinition_workflowdefinition', 
'e09e866f-288b-475c-9465-792cde8b878c', 
'5c570d3b-7b31-44fe-abd6-269a234584c5', 
'system$workflowusertaskdefinitionid', 
'system$workflowdefinitionid', 
'idx_system$workflowusertaskdefinition_workflowdefinition_system$workflowdefinition_system$workflowusertaskdefinition');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowusertaskdefinition_workflowdefinition_system$workflowusertaskdefinitionid', 
'685c576c-19af-4ea7-983d-ece147c1cebc', 
'ce3750f0-8db1-37ca-95b5-892696a3d9e2');
CREATE TABLE "system$workflowactivity" (
	"id" BIGINT NOT NULL,
	"modelguid" VARCHAR_IGNORECASE(36) NULL,
	"activityguid" VARCHAR_IGNORECASE(36) NULL,
	"caption" VARCHAR_IGNORECASE(2147483647) NULL,
	"state" VARCHAR_IGNORECASE(9) NULL,
	"starttime" TIMESTAMP NULL,
	"endtime" TIMESTAMP NULL,
	"error" VARCHAR_IGNORECASE(2147483647) NULL,
	"activityhash" VARCHAR_IGNORECASE(200) NULL,
	"ismigrationactivity" BOOLEAN NULL,
	"isderivedactivity" BOOLEAN NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('a5952592-bb2c-4798-9805-f9ff91ad97de', 
'System.WorkflowActivity', 
'system$workflowactivity', 
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
 VALUES ('941e921b-8935-402e-9d93-7894c5cc9164', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'ModelGUID', 
'modelguid', 
30, 
36, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('11384083-d925-4b16-a625-60af27227bb4', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'ActivityGUID', 
'activityguid', 
30, 
36, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('3236d0ea-2456-447a-b2ff-fc3b10a6ddb2', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'Caption', 
'caption', 
30, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('b0f8b9bd-f006-43a3-9c9f-edb70cd1642c', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'State', 
'state', 
40, 
9, 
'Started', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('1c9a62fd-2e39-4fd3-92a4-748940ae67ba', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'StartTime', 
'starttime', 
20, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('dc169e92-887a-4fc5-a21e-51d99b41314b', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'EndTime', 
'endtime', 
20, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('3b8d6bea-dfb5-497b-b2ad-c423efbd66eb', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'Error', 
'error', 
30, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('84cfff18-42dc-4442-b783-3ca923fcde81', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'ActivityHash', 
'activityhash', 
30, 
200, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('d78085f1-fdf5-40c1-93ae-30de543e4b81', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'IsMigrationActivity', 
'ismigrationactivity', 
10, 
0, 
'false', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('cace349b-8e30-437e-95df-c4fd4225490d', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'IsDerivedActivity', 
'isderivedactivity', 
10, 
0, 
'false', 
false);
CREATE TABLE "system$workflowactivity_previousactivity" (
	"system$workflowactivityid1" BIGINT NOT NULL,
	"system$workflowactivityid2" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowactivityid1","system$workflowactivityid2"));
CREATE INDEX "idx_system$workflowactivity_previousactivity_system$workflowactivity_system$workflowactivity" ON "system$workflowactivity_previousactivity" ("system$workflowactivityid2" ASC,"system$workflowactivityid1" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('8d8c8ffc-08d6-4dc5-88f6-5b344763d948', 
'System.WorkflowActivity_PreviousActivity', 
'system$workflowactivity_previousactivity', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'system$workflowactivityid1', 
'system$workflowactivityid2', 
'idx_system$workflowactivity_previousactivity_system$workflowactivity_system$workflowactivity');
CREATE TABLE "system$workflowactivity_workflowsystemtask" (
	"system$workflowactivityid" BIGINT NOT NULL,
	"system$workflowsystemtaskid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowactivityid","system$workflowsystemtaskid"),
	CONSTRAINT "uniq_system$workflowactivity_workflowsystemtask_system$workflowactivityid" UNIQUE ("system$workflowactivityid"));
CREATE INDEX "idx_system$workflowactivity_workflowsystemtask_system$workflowsystemtask_system$workflowactivity" ON "system$workflowactivity_workflowsystemtask" ("system$workflowsystemtaskid" ASC,"system$workflowactivityid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('1c3ed941-33a5-4a5f-b758-f1102a775851', 
'System.WorkflowActivity_WorkflowSystemTask', 
'system$workflowactivity_workflowsystemtask', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'87758885-664a-408c-91c4-36139c291545', 
'system$workflowactivityid', 
'system$workflowsystemtaskid', 
'idx_system$workflowactivity_workflowsystemtask_system$workflowsystemtask_system$workflowactivity');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowactivity_workflowsystemtask_system$workflowactivityid', 
'1c3ed941-33a5-4a5f-b758-f1102a775851', 
'd650d326-7825-30cd-a9a3-04296af6e810');
CREATE TABLE "system$workflowactivity_workflow" (
	"system$workflowactivityid" BIGINT NOT NULL,
	"system$workflowid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowactivityid","system$workflowid"),
	CONSTRAINT "uniq_system$workflowactivity_workflow_system$workflowactivityid" UNIQUE ("system$workflowactivityid"));
CREATE INDEX "idx_system$workflowactivity_workflow_system$workflow_system$workflowactivity" ON "system$workflowactivity_workflow" ("system$workflowid" ASC,"system$workflowactivityid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('ef863cc9-2d20-4a74-af65-0320a76b6a10', 
'System.WorkflowActivity_Workflow', 
'system$workflowactivity_workflow', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'system$workflowactivityid', 
'system$workflowid', 
'idx_system$workflowactivity_workflow_system$workflow_system$workflowactivity');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowactivity_workflow_system$workflowactivityid', 
'ef863cc9-2d20-4a74-af65-0320a76b6a10', 
'56628087-ac77-34ca-bd95-b86020fc4ffa');
CREATE TABLE "system$workflowactivity_workflowversion" (
	"system$workflowactivityid" BIGINT NOT NULL,
	"system$workflowversionid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowactivityid","system$workflowversionid"),
	CONSTRAINT "uniq_system$workflowactivity_workflowversion_system$workflowactivityid" UNIQUE ("system$workflowactivityid"));
CREATE INDEX "idx_system$workflowactivity_workflowversion_system$workflowversion_system$workflowactivity" ON "system$workflowactivity_workflowversion" ("system$workflowversionid" ASC,"system$workflowactivityid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('2e5166f9-7430-4265-8465-f7405d6fe1e9', 
'System.WorkflowActivity_WorkflowVersion', 
'system$workflowactivity_workflowversion', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'30834a21-e81c-4cbf-a10b-5f60f5fddc82', 
'system$workflowactivityid', 
'system$workflowversionid', 
'idx_system$workflowactivity_workflowversion_system$workflowversion_system$workflowactivity');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowactivity_workflowversion_system$workflowactivityid', 
'2e5166f9-7430-4265-8465-f7405d6fe1e9', 
'f25c7cf4-22a7-30e7-a3b6-1cda08ccc618');
CREATE TABLE "system$workflowactivity_workflowusertask" (
	"system$workflowactivityid" BIGINT NOT NULL,
	"system$workflowusertaskid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowactivityid","system$workflowusertaskid"),
	CONSTRAINT "uniq_system$workflowactivity_workflowusertask_system$workflowactivityid" UNIQUE ("system$workflowactivityid"));
CREATE INDEX "idx_system$workflowactivity_workflowusertask_system$workflowusertask_system$workflowactivity" ON "system$workflowactivity_workflowusertask" ("system$workflowusertaskid" ASC,"system$workflowactivityid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('aaebf783-447c-4386-ba25-969132aa6f7c', 
'System.WorkflowActivity_WorkflowUserTask', 
'system$workflowactivity_workflowusertask', 
'a5952592-bb2c-4798-9805-f9ff91ad97de', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'system$workflowactivityid', 
'system$workflowusertaskid', 
'idx_system$workflowactivity_workflowusertask_system$workflowusertask_system$workflowactivity');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowactivity_workflowusertask_system$workflowactivityid', 
'aaebf783-447c-4386-ba25-969132aa6f7c', 
'096b955d-f88f-303f-b43e-deef60b57065');
CREATE TABLE "system$workflowsystemtask" (
	"id" BIGINT NOT NULL,
	"outcomemodelguid" VARCHAR_IGNORECASE(36) NULL,
	"state" VARCHAR_IGNORECASE(10) NULL,
	"reason" VARCHAR_IGNORECASE(2147483647) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('87758885-664a-408c-91c4-36139c291545', 
'System.WorkflowSystemTask', 
'system$workflowsystemtask', 
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
 VALUES ('608eb1ee-715d-41e4-a565-4c95b98874c7', 
'87758885-664a-408c-91c4-36139c291545', 
'OutcomeModelGUID', 
'outcomemodelguid', 
30, 
36, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('5504a52c-8796-4cec-ac56-4ac7b699939c', 
'87758885-664a-408c-91c4-36139c291545', 
'State', 
'state', 
40, 
10, 
'InProgress', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('d348e310-a647-494b-85b1-1a53d5777bcc', 
'87758885-664a-408c-91c4-36139c291545', 
'Reason', 
'reason', 
30, 
0, 
'', 
false);
CREATE TABLE "system$workflowsystemtask_workflow" (
	"system$workflowsystemtaskid" BIGINT NOT NULL,
	"system$workflowid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowsystemtaskid","system$workflowid"),
	CONSTRAINT "uniq_system$workflowsystemtask_workflow_system$workflowsystemtaskid" UNIQUE ("system$workflowsystemtaskid"));
CREATE INDEX "idx_system$workflowsystemtask_workflow_system$workflow_system$workflowsystemtask" ON "system$workflowsystemtask_workflow" ("system$workflowid" ASC,"system$workflowsystemtaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('0bbc01af-7337-438a-ba7d-663ce015a628', 
'System.WorkflowSystemTask_Workflow', 
'system$workflowsystemtask_workflow', 
'87758885-664a-408c-91c4-36139c291545', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'system$workflowsystemtaskid', 
'system$workflowid', 
'idx_system$workflowsystemtask_workflow_system$workflow_system$workflowsystemtask');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowsystemtask_workflow_system$workflowsystemtaskid', 
'0bbc01af-7337-438a-ba7d-663ce015a628', 
'99ba8e62-bf5c-306b-b025-2228f5af23e4');
CREATE TABLE "system$workflowversion" (
	"id" BIGINT NOT NULL,
	"versionhash" VARCHAR_IGNORECASE(200) NULL,
	"modeljson" VARCHAR_IGNORECASE(2147483647) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('30834a21-e81c-4cbf-a10b-5f60f5fddc82', 
'System.WorkflowVersion', 
'system$workflowversion', 
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
 VALUES ('ee842048-ff1d-4ea4-80b3-2d1123437d5f', 
'30834a21-e81c-4cbf-a10b-5f60f5fddc82', 
'VersionHash', 
'versionhash', 
30, 
200, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('2c5449d3-09f4-463f-8a99-439c6cb74fed', 
'30834a21-e81c-4cbf-a10b-5f60f5fddc82', 
'ModelJSON', 
'modeljson', 
30, 
0, 
'', 
false);
CREATE TABLE "system$workflowversion_workflowusertaskdefinition" (
	"system$workflowversionid" BIGINT NOT NULL,
	"system$workflowusertaskdefinitionid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowversionid","system$workflowusertaskdefinitionid"));
CREATE INDEX "idx_system$workflowversion_workflowusertaskdefinition_system$workflowusertaskdefinition_system$workflowversion" ON "system$workflowversion_workflowusertaskdefinition" ("system$workflowusertaskdefinitionid" ASC,"system$workflowversionid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('3348e396-6643-4a5b-bcb1-a939cdcdf435', 
'System.WorkflowVersion_WorkflowUserTaskDefinition', 
'system$workflowversion_workflowusertaskdefinition', 
'30834a21-e81c-4cbf-a10b-5f60f5fddc82', 
'e09e866f-288b-475c-9465-792cde8b878c', 
'system$workflowversionid', 
'system$workflowusertaskdefinitionid', 
'idx_system$workflowversion_workflowusertaskdefinition_system$workflowusertaskdefinition_system$workflowversion');
CREATE TABLE "system$workflowversion_previousversion" (
	"system$workflowversionid1" BIGINT NOT NULL,
	"system$workflowversionid2" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowversionid1","system$workflowversionid2"),
	CONSTRAINT "uniq_system$workflowversion_previousversion_system$workflowversionid1" UNIQUE ("system$workflowversionid1"));
CREATE INDEX "idx_system$workflowversion_previousversion_system$workflowversion_system$workflowversion" ON "system$workflowversion_previousversion" ("system$workflowversionid2" ASC,"system$workflowversionid1" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('61a2af90-0720-41a0-bea9-8a3d60de71d0', 
'System.WorkflowVersion_PreviousVersion', 
'system$workflowversion_previousversion', 
'30834a21-e81c-4cbf-a10b-5f60f5fddc82', 
'30834a21-e81c-4cbf-a10b-5f60f5fddc82', 
'system$workflowversionid1', 
'system$workflowversionid2', 
'idx_system$workflowversion_previousversion_system$workflowversion_system$workflowversion');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowversion_previousversion_system$workflowversionid1', 
'61a2af90-0720-41a0-bea9-8a3d60de71d0', 
'a0f7479f-37c0-39ac-9fb9-5589bd8627c5');
CREATE TABLE "system$workflowversion_workflowdefinition" (
	"system$workflowversionid" BIGINT NOT NULL,
	"system$workflowdefinitionid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowversionid","system$workflowdefinitionid"),
	CONSTRAINT "uniq_system$workflowversion_workflowdefinition_system$workflowversionid" UNIQUE ("system$workflowversionid"));
CREATE INDEX "idx_system$workflowversion_workflowdefinition_system$workflowdefinition_system$workflowversion" ON "system$workflowversion_workflowdefinition" ("system$workflowdefinitionid" ASC,"system$workflowversionid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('c063e3e7-a440-47f0-8065-6fac7c723690', 
'System.WorkflowVersion_WorkflowDefinition', 
'system$workflowversion_workflowdefinition', 
'30834a21-e81c-4cbf-a10b-5f60f5fddc82', 
'5c570d3b-7b31-44fe-abd6-269a234584c5', 
'system$workflowversionid', 
'system$workflowdefinitionid', 
'idx_system$workflowversion_workflowdefinition_system$workflowdefinition_system$workflowversion');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowversion_workflowdefinition_system$workflowversionid', 
'c063e3e7-a440-47f0-8065-6fac7c723690', 
'47c7ac0f-8b15-3178-ae6c-8b0cb0debb61');
CREATE TABLE "system$workflowdefinition" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	"title" VARCHAR_IGNORECASE(200) NULL,
	"isobsolete" BOOLEAN NULL,
	"modelguid" VARCHAR_IGNORECASE(36) NULL,
	PRIMARY KEY("id"),
	CONSTRAINT "uniq_system$workflowdefinition_modelguid" UNIQUE ("modelguid"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('5c570d3b-7b31-44fe-abd6-269a234584c5', 
'System.WorkflowDefinition', 
'system$workflowdefinition', 
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
 VALUES ('d16c4272-c9d3-4371-86f6-69eb263033e1', 
'5c570d3b-7b31-44fe-abd6-269a234584c5', 
'Name', 
'name', 
30, 
200, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('e023e8ca-3319-4698-a841-30430fdca099', 
'5c570d3b-7b31-44fe-abd6-269a234584c5', 
'Title', 
'title', 
30, 
200, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('8554021f-9842-4c51-b124-86a102d33da7', 
'5c570d3b-7b31-44fe-abd6-269a234584c5', 
'IsObsolete', 
'isobsolete', 
10, 
0, 
'false', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('d61ef304-2773-4336-a146-8997dfccae8a', 
'5c570d3b-7b31-44fe-abd6-269a234584c5', 
'ModelGUID', 
'modelguid', 
30, 
36, 
'', 
false);
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowdefinition_modelguid', 
'5c570d3b-7b31-44fe-abd6-269a234584c5', 
'd61ef304-2773-4336-a146-8997dfccae8a');
CREATE TABLE "system$workflowdefinition_currentworkflowversion" (
	"system$workflowdefinitionid" BIGINT NOT NULL,
	"system$workflowversionid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowdefinitionid","system$workflowversionid"),
	CONSTRAINT "uniq_system$workflowdefinition_currentworkflowversion_system$workflowdefinitionid" UNIQUE ("system$workflowdefinitionid"));
CREATE INDEX "idx_system$workflowdefinition_currentworkflowversion_system$workflowversion_system$workflowdefinition" ON "system$workflowdefinition_currentworkflowversion" ("system$workflowversionid" ASC,"system$workflowdefinitionid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('2b065cdd-3d2c-4517-9727-ced57d97fd03', 
'System.WorkflowDefinition_CurrentWorkflowVersion', 
'system$workflowdefinition_currentworkflowversion', 
'5c570d3b-7b31-44fe-abd6-269a234584c5', 
'30834a21-e81c-4cbf-a10b-5f60f5fddc82', 
'system$workflowdefinitionid', 
'system$workflowversionid', 
'idx_system$workflowdefinition_currentworkflowversion_system$workflowversion_system$workflowdefinition');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowdefinition_currentworkflowversion_system$workflowdefinitionid', 
'2b065cdd-3d2c-4517-9727-ced57d97fd03', 
'eb384fa0-c9cd-3568-bdd6-1501cb6e352e');
CREATE TABLE "system$workflowusertask" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(2147483647) NULL,
	"description" VARCHAR_IGNORECASE(2147483647) NULL,
	"starttime" TIMESTAMP NULL,
	"duedate" TIMESTAMP NULL,
	"endtime" TIMESTAMP NULL,
	"outcome" VARCHAR_IGNORECASE(200) NULL,
	"state" VARCHAR_IGNORECASE(11) NULL,
	"reason" VARCHAR_IGNORECASE(2147483647) NULL,
	"outcomemodelguid" VARCHAR_IGNORECASE(36) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('3729d27c-735b-457a-b210-9dffb125c3f3', 
'System.WorkflowUserTask', 
'system$workflowusertask', 
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
 VALUES ('122c4e1e-edda-4311-85b7-2a715626b869', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'Name', 
'name', 
30, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('544b4b9a-c5ac-4785-8efb-647a51648024', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'Description', 
'description', 
30, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('beeda34a-8cd1-4bbe-abd3-b18a3a0ea0ef', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'StartTime', 
'starttime', 
20, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('17ae7bb0-2dea-4860-9c7b-f236aaf5a790', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'DueDate', 
'duedate', 
20, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('49503f62-1887-4823-bf94-db88a332f316', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'EndTime', 
'endtime', 
20, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('047e7010-cbc4-4bba-bf64-774fa656d010', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'Outcome', 
'outcome', 
30, 
200, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('f87a5a98-730e-4c57-b6c4-ae09cd057e65', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'State', 
'state', 
40, 
11, 
'Initialized', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('653e72c3-2fa4-471c-b0c7-829c5a939e99', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'Reason', 
'reason', 
30, 
0, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('1f680c7a-7bca-4188-9ecd-184da0768b82', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'OutcomeModelGUID', 
'outcomemodelguid', 
30, 
36, 
'', 
false);
CREATE TABLE "system$workflowusertask_workflowusertaskdefinition" (
	"system$workflowusertaskid" BIGINT NOT NULL,
	"system$workflowusertaskdefinitionid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowusertaskid","system$workflowusertaskdefinitionid"),
	CONSTRAINT "uniq_system$workflowusertask_workflowusertaskdefinition_system$workflowusertaskid" UNIQUE ("system$workflowusertaskid"));
CREATE INDEX "idx_system$workflowusertask_workflowusertaskdefinition_system$workflowusertaskdefinition_system$workflowusertask" ON "system$workflowusertask_workflowusertaskdefinition" ("system$workflowusertaskdefinitionid" ASC,"system$workflowusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('0169cc0e-491b-4ee3-812d-6bf3ba28e287', 
'System.WorkflowUserTask_WorkflowUserTaskDefinition', 
'system$workflowusertask_workflowusertaskdefinition', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'e09e866f-288b-475c-9465-792cde8b878c', 
'system$workflowusertaskid', 
'system$workflowusertaskdefinitionid', 
'idx_system$workflowusertask_workflowusertaskdefinition_system$workflowusertaskdefinition_system$workflowusertask');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowusertask_workflowusertaskdefinition_system$workflowusertaskid', 
'0169cc0e-491b-4ee3-812d-6bf3ba28e287', 
'0643c851-59f7-3428-92a1-a970ad21ad18');
CREATE TABLE "system$workflowusertask_workflow" (
	"system$workflowusertaskid" BIGINT NOT NULL,
	"system$workflowid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowusertaskid","system$workflowid"),
	CONSTRAINT "uniq_system$workflowusertask_workflow_system$workflowusertaskid" UNIQUE ("system$workflowusertaskid"));
CREATE INDEX "idx_system$workflowusertask_workflow_system$workflow_system$workflowusertask" ON "system$workflowusertask_workflow" ("system$workflowid" ASC,"system$workflowusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('53a1c6d7-5e4d-4a2d-81ec-58fde4bbba8a', 
'System.WorkflowUserTask_Workflow', 
'system$workflowusertask_workflow', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'2ae37bf5-ecb8-4c55-b967-d7383925b208', 
'system$workflowusertaskid', 
'system$workflowid', 
'idx_system$workflowusertask_workflow_system$workflow_system$workflowusertask');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowusertask_workflow_system$workflowusertaskid', 
'53a1c6d7-5e4d-4a2d-81ec-58fde4bbba8a', 
'bb1eaa2c-e600-3a88-85d0-08d5f5ca94da');
CREATE TABLE "system$workflowusertask_assignee" (
	"system$workflowusertaskid" BIGINT NOT NULL,
	"system$userid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowusertaskid","system$userid"),
	CONSTRAINT "uniq_system$workflowusertask_assignee_system$workflowusertaskid" UNIQUE ("system$workflowusertaskid"));
CREATE INDEX "idx_system$workflowusertask_assignee_system$user_system$workflowusertask" ON "system$workflowusertask_assignee" ("system$userid" ASC,"system$workflowusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('929fbbed-d3a8-4ea2-b6ad-b28de4f77776', 
'System.WorkflowUserTask_Assignee', 
'system$workflowusertask_assignee', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'282e2e60-88a5-469d-84a5-ba8d9151644f', 
'system$workflowusertaskid', 
'system$userid', 
'idx_system$workflowusertask_assignee_system$user_system$workflowusertask');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$workflowusertask_assignee_system$workflowusertaskid', 
'929fbbed-d3a8-4ea2-b6ad-b28de4f77776', 
'ed895e88-8fb4-3df0-b86f-faab883d19ec');
CREATE TABLE "system$workflowusertask_targetusers" (
	"system$workflowusertaskid" BIGINT NOT NULL,
	"system$userid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowusertaskid","system$userid"));
CREATE INDEX "idx_system$workflowusertask_targetusers_system$user_system$workflowusertask" ON "system$workflowusertask_targetusers" ("system$userid" ASC,"system$workflowusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('2b9c1990-302f-474c-9341-9d5d23b27653', 
'System.WorkflowUserTask_TargetUsers', 
'system$workflowusertask_targetusers', 
'3729d27c-735b-457a-b210-9dffb125c3f3', 
'282e2e60-88a5-469d-84a5-ba8d9151644f', 
'system$workflowusertaskid', 
'system$userid', 
'idx_system$workflowusertask_targetusers_system$user_system$workflowusertask');
DELETE FROM "3e0492d612054453ae0dbc07139e27e1" 
 WHERE "id" IN (SELECT "id"
 FROM "99ac53c25f5941d4b8a47862873ae67c");
DELETE FROM "894ad6a95aad47d9b67de22130aca739" 
 WHERE "system$workflowtaskinstanceid" IN (SELECT "id"
 FROM "99ac53c25f5941d4b8a47862873ae67c");
DELETE FROM "1991ed7005584993b08422b3edd25c14" 
 WHERE "system$workflowtaskinstanceid" IN (SELECT "id"
 FROM "99ac53c25f5941d4b8a47862873ae67c");
DELETE FROM "c5b0e5d0a5254091a5f5c6afad361e3c" 
 WHERE "system$workflowtaskinstanceid" IN (SELECT "id"
 FROM "99ac53c25f5941d4b8a47862873ae67c");
DELETE FROM "3e0492d612054453ae0dbc07139e27e1" 
 WHERE "id" IN (SELECT "id"
 FROM "2ab5616ef0cb4370bf269c2328dd3632");
DELETE FROM "894ad6a95aad47d9b67de22130aca739" 
 WHERE "system$workflowtaskinstanceid" IN (SELECT "id"
 FROM "2ab5616ef0cb4370bf269c2328dd3632");
DELETE FROM "1991ed7005584993b08422b3edd25c14" 
 WHERE "system$workflowtaskinstanceid" IN (SELECT "id"
 FROM "2ab5616ef0cb4370bf269c2328dd3632");
DELETE FROM "c5b0e5d0a5254091a5f5c6afad361e3c" 
 WHERE "system$workflowtaskinstanceid" IN (SELECT "id"
 FROM "2ab5616ef0cb4370bf269c2328dd3632");
DROP TABLE "b1d15e3e1034404ebdeeae240b3d4ee1";
DROP TABLE "a515589e34c04e11ac53cc4ee6a113fc";
DROP TABLE "0372a21dfc794338b4b5c875200b54ba";
DROP TABLE "c993bcfc4b84429189db5a735f3e56b8";
DROP TABLE "52f2996c48404918a84824957658e636";
DROP TABLE "ac29d1c691264b8fa0f0605b2feb4dea";
DROP TABLE "cefeabb7b6ff4339abb8bd93be4c302c";
DROP TABLE "005cbb83beeb4829b533ae05d7b6cf7e";
DROP TABLE "e19e0671d96448acbb9d5dbbfbad4645";
DROP TABLE "e19664eb5a6c4881aa29cd7f44779002";
DROP TABLE "2ab5616ef0cb4370bf269c2328dd3632";
DROP TABLE "c61eaa6d901245169de45985793e413a";
DROP TABLE "3e0492d612054453ae0dbc07139e27e1";
DROP TABLE "894ad6a95aad47d9b67de22130aca739";
DROP TABLE "1991ed7005584993b08422b3edd25c14";
DROP TABLE "99ac53c25f5941d4b8a47862873ae67c";
DROP TABLE "878a398f68684921886a2cc674104058";
DROP TABLE "974e183459eb4a66835bc07ded91dd0d";
DROP TABLE "c0bb325902584d0aa58fcc439ec33fb8";
DROP TABLE "902a99bfb5d843e88d3c7a6c5a7dd94d";
DROP TABLE "cc668c6cf0274bc69cc3c0d413fbdad1";
DROP TABLE "f476d96a2090428c8b6be97ec7a18f0d";
DROP TABLE "c5b0e5d0a5254091a5f5c6afad361e3c";
DROP TABLE "7ce7a09dd2da47c587dc0951ce6902c4";
DROP TABLE "20e0e556d164496fb9edc40b666d94d3";
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20211114 11:52:23';
