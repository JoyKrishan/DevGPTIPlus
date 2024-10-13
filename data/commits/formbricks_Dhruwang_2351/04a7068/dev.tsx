import { FileIcon, XIcon } from "lucide-react";
import LoadingSpinner from "../LoadingSpinner";
      <div className="mb-4 space-y-4 rounded-lg border border-slate-300">
        <div className="px-4 pb-4">
          {activeTab === "video" && (
            <VideoSettings
              uploadedVideoUrl={uploadedVideoUrl}
              setUploadedVideoUrl={setUploadedVideoUrl}
              onFileUpload={onFileUpload}
              videoUrl={videoUrl ?? ""}
              setVideoUrlTemp={setVideoUrlTemp}
            />
          )}

          {activeTab === "image" && (
            <div>
              {selectedFiles.length > 0 ? (
                multiple ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedFiles.map((file, idx) => (
                      <>
                        {isImage(file.name) ? (
                          <div className="relative h-24 w-40 overflow-hidden rounded-lg">
                            <Image
                              src={file.url}
                              alt={file.name}
                              fill
                              sizes="100%"
                              style={{ objectFit: "cover" }}
                              quality={100}
                              className={!file.uploaded ? "opacity-50" : ""}
                            />
                            {file.uploaded ? (
                              <div
                                className="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-md bg-slate-100 p-1 hover:bg-slate-200 hover:bg-white/90"
                                onClick={() => handleRemove(idx)}>
                                <XIcon className="h-5 text-slate-700 hover:text-slate-900" />
                              </div>
                            ) : (
                              <LoadingSpinner />
                            )}
                          </div>
                        ) : (
                          <div className="relative flex h-24 w-40 flex-col items-center justify-center rounded-lg border border-slate-300 px-2 py-3">
                            <FileIcon className="h-6 text-slate-500" />
                            <p
                              className="mt-2 w-full truncate text-center text-sm text-slate-500"
                              title={file.name}>
                              <span className="font-semibold">{file.name}</span>
                            </p>
                            {file.uploaded ? (
                              <div
                                className="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-md bg-slate-100 p-1 hover:bg-slate-200 hover:bg-white/90"
                                onClick={() => handleRemove(idx)}>
                                <XIcon className="h-5 text-slate-700 hover:text-slate-900" />
                              </div>
                            ) : (
                              <LoadingSpinner />
                            )}
                          </div>
                        )}
                      </>
                    ))}

                    <Uploader
                      id={id}
                      name="uploadMore"
                      handleDragOver={handleDragOver}
                      uploaderClassName="h-24 w-40"
                      handleDrop={handleUploadMoreDrop}
                      allowedFileExtensions={allowedFileExtensions}
                      multiple={multiple}
                      handleUpload={handleUploadMore}
                      uploadMore={true}
                    />
                  </div>
                ) : (
                  <div className="h-52">
                    {isImage(selectedFiles[0].name) ? (
                      <div className="relative mx-auto h-full w-full overflow-hidden rounded-lg">
                          src={selectedFiles[0].url}
                          alt={selectedFiles[0].name}
                          style={{ objectFit: imageFit }}
                          className={!selectedFiles[0].uploaded ? "opacity-50" : ""}
                        {selectedFiles[0].uploaded ? (
                            onClick={() => handleRemove(0)}>
                          <LoadingSpinner />
                      <div className="relative flex h-full w-full flex-col items-center justify-center border border-slate-300">
                        <p className="mt-2 text-sm text-slate-500">
                          <span className="font-semibold">{selectedFiles[0].name}</span>
                        {selectedFiles[0].uploaded ? (
                            onClick={() => handleRemove(0)}>
                          <LoadingSpinner />
                  </div>
                )
              ) : (
                  name="selected-file"
                  handleDrop={handleDrop}
                  uploaderClassName="h-52 w-full"
                  handleUpload={handleUpload}
              )}
            </div>
      </div>