import React, { memo, useRef } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaCamera } from "react-icons/fa";
import type { ImageCardProps } from "../../types/interfaces/useMemo/image.interface";


const ImageCard: React.FC<ImageCardProps> = ({ preview, onImageChange, error }) => {
  console.log("ImageCard rendering");
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
        Product Image
      </Typography>

      <Button
        variant="outlined"
        color={error ? "error" : "primary"}
        startIcon={<FaCamera />}
        onClick={() => fileInputRef.current?.click()}
        className="border-dashed"
        fullWidth
      >
        Upload Image
      </Button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            console.log("📷 file selected ->", file.name);
            onImageChange(file);
          }
          event.target.value = ""; // allows selecting the same file again after reset
        }}
      />

      {preview && (
        <Box
          component="img"
          src={preview}
          alt="preview"
          className="w-24 h-24 object-cover mt-2 rounded-md"
        />
      )}

      {error && (
        <Typography variant="caption" color="error" className="block mt-1">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default memo(ImageCard);
