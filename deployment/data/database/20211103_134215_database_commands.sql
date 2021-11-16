CREATE TABLE "graph$edge" (
	"id" BIGINT NOT NULL,
	"label" VARCHAR_IGNORECASE(200) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('e9681a23-4bd0-4b94-ab51-b2ce71da0b49', 
'Graph.Edge', 
'graph$edge', 
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
 VALUES ('befbf604-fcc9-4987-ad69-24640d38bbef', 
'e9681a23-4bd0-4b94-ab51-b2ce71da0b49', 
'Label', 
'label', 
30, 
200, 
'', 
false);
CREATE TABLE "graph$edge_node_to" (
	"graph$edgeid" BIGINT NOT NULL,
	"graph$nodeid" BIGINT NOT NULL,
	PRIMARY KEY("graph$edgeid","graph$nodeid"),
	CONSTRAINT "uniq_graph$edge_node_to_graph$edgeid" UNIQUE ("graph$edgeid"));
CREATE INDEX "idx_graph$edge_node_to_graph$node_graph$edge" ON "graph$edge_node_to" ("graph$nodeid" ASC,"graph$edgeid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('b0c5ecae-7b8a-43ba-825c-e9c2fe3c2384', 
'Graph.Edge_Node_To', 
'graph$edge_node_to', 
'e9681a23-4bd0-4b94-ab51-b2ce71da0b49', 
'db7c0939-1af5-4151-a287-bf69e8e07ee7', 
'graph$edgeid', 
'graph$nodeid', 
'idx_graph$edge_node_to_graph$node_graph$edge');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_graph$edge_node_to_graph$edgeid', 
'b0c5ecae-7b8a-43ba-825c-e9c2fe3c2384', 
'79bb3d22-70e1-3ad5-b2b1-87713b4e4d47');
CREATE TABLE "graph$edge_node_from" (
	"graph$edgeid" BIGINT NOT NULL,
	"graph$nodeid" BIGINT NOT NULL,
	PRIMARY KEY("graph$edgeid","graph$nodeid"),
	CONSTRAINT "uniq_graph$edge_node_from_graph$edgeid" UNIQUE ("graph$edgeid"));
CREATE INDEX "idx_graph$edge_node_from_graph$node_graph$edge" ON "graph$edge_node_from" ("graph$nodeid" ASC,"graph$edgeid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('e8e71749-d146-4e37-a000-16d6d0237031', 
'Graph.Edge_Node_From', 
'graph$edge_node_from', 
'e9681a23-4bd0-4b94-ab51-b2ce71da0b49', 
'db7c0939-1af5-4151-a287-bf69e8e07ee7', 
'graph$edgeid', 
'graph$nodeid', 
'idx_graph$edge_node_from_graph$node_graph$edge');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_graph$edge_node_from_graph$edgeid', 
'e8e71749-d146-4e37-a000-16d6d0237031', 
'd482c615-fa5a-3b1a-9cff-5c98b1062c86');
CREATE TABLE "graph$node" (
	"id" BIGINT NOT NULL,
	"label" VARCHAR_IGNORECASE(200) NULL,
	"cluster" VARCHAR_IGNORECASE(200) NULL,
	"key" VARCHAR_IGNORECASE(200) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('db7c0939-1af5-4151-a287-bf69e8e07ee7', 
'Graph.Node', 
'graph$node', 
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
 VALUES ('bafc4488-a59e-4566-bef4-0cc753d01179', 
'db7c0939-1af5-4151-a287-bf69e8e07ee7', 
'Label', 
'label', 
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
 VALUES ('ff95f113-d842-497e-9a8f-3ee5abca077d', 
'db7c0939-1af5-4151-a287-bf69e8e07ee7', 
'Cluster', 
'cluster', 
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
 VALUES ('65265791-e5f3-4c8a-82f7-2147d0fa47a9', 
'db7c0939-1af5-4151-a287-bf69e8e07ee7', 
'Key', 
'key', 
30, 
200, 
'', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20211103 13:42:15';
