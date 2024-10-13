// VideoSettings.tsx
import React, { useState, useCallback } from 'react';
import { AlertTriangle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Input, Button, Label, AdvancedOptionToggle } from '../../components';
import { useVideoSettings } from '../hooks/useVideoSettings';

interface VideoSettingsProps {
  uploadedVideoUrl: string;
  setUploadedVideoUrl: (videoUrl: string) => void;
  onFileUpload: (uploadedUrl: string[] | undefined, fileType: 'image' | 'video') => void;
  videoUrl: string;
  setVideoUrlTemp: (videoUrl: string) => void;
}

export const VideoSettings: React.FC<VideoSettingsProps> = ({
  uploadedVideoUrl,
  setUploadedVideoUrl,
  onFileUpload,
  videoUrl,
  setVideoUrlTemp,
}) => {
  const {
    isYoutubeLink,
    isYoutubePrivacyModeEnabled,
    showPlatformWarning,
    handleAddVideo,
    handleRemoveVideo,
    handleVideoUrlChange,
    toggleYoutubePrivacyMode,
    isAddButtonDisabled,
  } = useVideoSettings(uploadedVideoUrl, setUploadedVideoUrl, onFileUpload, videoUrl, setVideoUrlTemp);

  return (
    <form className="flex flex-col space-y-4">
      <Label>Video URL (YouTube, Vimeo, or Loom)</Label>
      <div className="flex h-10 items-center space-x-2">
        <Input
          className="w-full"
          placeholder="https://www.youtube.com/embed/VIDEO_ID"
          value={uploadedVideoUrl}
          onChange={handleVideoUrlChange}
        />
        {uploadedVideoUrl && videoUrl === uploadedVideoUrl ? (
          <Button variant="darkCTA" onClick={handleRemoveVideo}>
            Remove
          </Button>
        ) : (
          <Button variant="darkCTA" onClick={handleAddVideo} disabled={isAddButtonDisabled()}>
            Add
          </Button>
        )}
      </div>
      {showPlatformWarning && (
        <div className="flex items-center space-x-2 rounded-md border bg-slate-100 p-2 text-sm">
          <AlertTriangle className="h-4 w-4" />
          <p>Please enter a valid YouTube, Vimeo, or Loom URL</p>
        </div>
      )}
      {isYoutubeLink && (
        <AdvancedOptionToggle
          htmlId="youtubePrivacyMode"
          isChecked={isYoutubePrivacyModeEnabled}
          onToggle={toggleYoutubePrivacyMode}
          title="YouTube Privacy Mode"
          description="Keeps user tracking to a minimum"
          childBorder={true}
        />
      )}
    </form>
  );
};