CREATE EXTENSION if not exists pgcrypto;
CREATE TABLE IF NOT EXISTS poche_items (
    id uuid DEFAULT gen_random_uuid(),
    title VARCHAR(100) NOT NULL,
    url VARCHAR(2083) NOT NULL,
    memo VARCHAR(1024),
    date DATE DEFAULT now() NOT NULL,
    ogp VARCHAR(2083),
    tags VARCHAR(100)[],
    private boolean NOT NULL
)
