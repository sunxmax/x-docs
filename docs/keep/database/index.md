# 数据库

常见的数据库可以分为关系型数据库（RDBMS）、NoSQL数据库、云原生数据库、以及其他专用数据库。以下是一些常见的数据库及其简要介绍：

### 1. **关系型数据库 (RDBMS)**
基于表格结构，使用SQL进行查询，适合结构化数据。
- **MySQL**: 开源，广泛应用于Web开发，高性能且易于使用。
- **PostgreSQL**: 开源，支持高级功能，如JSON存储、地理信息系统（GIS），适合复杂应用。
- **Oracle Database**: 企业级数据库，功能强大，广泛用于大型企业。
- **Microsoft SQL Server**: 微软开发的数据库，适合Windows生态，功能全面。
- **SQLite**: 轻量级嵌入式数据库，适合移动应用和小规模项目。

### 2. **NoSQL数据库**
适合非结构化或半结构化数据，扩展性强。
- **MongoDB**: 文档型数据库，存储JSON-like文档，适合灵活的数据模型。
- **Redis**: 键值存储数据库，内存型，速度极快，常用于缓存和实时应用。
- **Cassandra**: 分布式列存储数据库，适合处理大规模数据和高并发。
- **Elasticsearch**: 搜索和分析数据库，基于全文索引，适合日志和搜索场景。
- **DynamoDB**: AWS提供的NoSQL数据库，serverless，适合高可用性应用。

### 3. **云原生数据库**
为云环境设计，托管在云平台，自动扩展和高可用。
- **Amazon RDS**: AWS托管的关系型数据库，支持MySQL、PostgreSQL等。
- **Google Cloud Spanner**: 全球分布式关系型数据库，兼具SQL和NoSQL优势。
- **Azure Cosmos DB**: 微软的分布式NoSQL数据库，支持多种数据模型。
- **Snowflake**: 云数据仓库，适合大数据分析和数据湖场景。

### 4. **其他专用数据库**
- **InfluxDB**: 时序数据库，适合物联网和时间序列数据。
- **Neo4j**: 图数据库，适合关系复杂的数据，如社交网络。
- **ClickHouse**: 列式数据库，优化用于分析查询，适合大数据场景。

### 选择建议
- **小型项目**：SQLite、MySQL。
- **企业级应用**：Oracle、PostgreSQL、SQL Server。
- **高并发/分布式**：Cassandra、DynamoDB。
- **实时分析**：Redis、Elasticsearch。
- **大数据分析**：Snowflake、ClickHouse。