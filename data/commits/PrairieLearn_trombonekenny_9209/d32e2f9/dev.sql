  pg_catalog.format_type (a.atttypid, a.atttypmod) AS type,
  a.attnotnull AS notnull,
  (
    SELECT
      substring(
        pg_catalog.pg_get_expr (d.adbin, d.adrelid) for 128
      )
    FROM
      pg_catalog.pg_attrdef d
    WHERE
      d.adrelid = a.attrelid
      AND d.adnum = a.attnum
      AND a.atthasdef
  ) AS default
  ARRAY(