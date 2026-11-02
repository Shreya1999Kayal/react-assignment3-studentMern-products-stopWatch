export interface ImageCardProps {
  preview: string | null;
  onImageChange: (file: File) => void; // wrapped in useCallback in the parent
  error?: string;
}