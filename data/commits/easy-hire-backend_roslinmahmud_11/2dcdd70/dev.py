def get_sorted_resumes(job_id: int, db: Session, skip: int = 0, limit: int = 100):
    sort_resumes(job_id, db)
    return db.query(models.Resume).filter(models.Resume.job_id == job_id).order_by(
        asc(models.Resume.sort_order)).offset(skip).limit(limit).all()


    db_job = get_job(db, job_id)