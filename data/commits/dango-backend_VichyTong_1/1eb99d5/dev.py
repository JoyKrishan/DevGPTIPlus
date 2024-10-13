@app.post("/modify/{sheet_id}")
async def modify_file(sheet_id: str, file: UploadFile = File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Unsupported file type")
    file_path = os.path.join(UPLOAD_FOLDER, sheet_id)

    # Replace the file
    try:
        with open(file_path, "wb") as buffer:
            while data := await file.read(1024):
                buffer.write(data)
    except IOError as e:
        raise HTTPException(status_code=500, detail=f"File modification failed: {e}")

    return JSONResponse(
        status_code=200,
        content={"message": "File modified successfully", "sheet_id": sheet_id},
    )


@app.delete("/delete/{sheet_id}")
async def delete_file(sheet_id: str):
    file_path = os.path.join(UPLOAD_FOLDER, sheet_id)

    # Check if file exists
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")

    # Delete the file
    try:
        os.remove(file_path)
    except IOError as e:
        raise HTTPException(status_code=500, detail=f"File deletion failed: {e}")

    return JSONResponse(
        status_code=200, content={"message": "File deleted successfully"}
    )

