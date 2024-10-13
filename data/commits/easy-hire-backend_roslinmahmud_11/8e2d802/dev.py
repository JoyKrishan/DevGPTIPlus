@app.get('/sortedresumes/{job_id}')
async def get_sorted_resumes(job_id: int, db: Session = Depends(get_db)):
    return crud.get_sorted_resumes(job_id=job_id, db=db)


@app.delete('/resume/{resume_id}')
async def delete_resume(resume_id: int, db: Session = Depends(get_db)):
    return crud.delete_resume(resume_id=resume_id, db=db)

