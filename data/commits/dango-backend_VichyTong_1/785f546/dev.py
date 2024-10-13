from fastapi.responses import JSONResponse
UPLOAD_FOLDER = "./files"
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Unsupported file type")
    unique_filename = f"{uuid.uuid4()}_{file.filename}"
    file_path = os.path.join(UPLOAD_FOLDER, unique_filename)

    # Save the file
    try:
        with open(file_path, "wb") as buffer:
            while data := await file.read(1024):
                buffer.write(data)
    except IOError as e:
        raise HTTPException(status_code=500, detail=f"File save failed: {e}")

    return JSONResponse(status_code=200, content={"sheet_id": unique_filename})
    if status == "analyze":