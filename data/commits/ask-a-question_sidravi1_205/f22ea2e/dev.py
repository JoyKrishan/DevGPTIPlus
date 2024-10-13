        sa.Column("hashed_password", sa.String(length=96), nullable=False),
        sa.Column("hashed_retrieval_key", sa.String(length=96), nullable=True),