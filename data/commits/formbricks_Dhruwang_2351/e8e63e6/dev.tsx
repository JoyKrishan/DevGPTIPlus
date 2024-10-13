import { LoadingSpinner } from "@/components/general/LoadingSpinner";
import { useState } from "preact/hooks";

  const [isVideoLoading, setIsVideoLoading] = useState(true);
        <div className="relative">
          {isVideoLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
          <iframe
            className="h-full w-full"
            src={videoUrl}
            frameBorder="0"
            onLoad={() => setIsVideoLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>