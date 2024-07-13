import { Box, Snackbar, Alert } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Text from "./Text";
import { theme } from "../../theme/Theme";

function UploadDocument(props) {
  const { Url, setUrl, message } = props;
  const [open, setopen] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles[0]);
      setUrl(acceptedFiles[0]);
      setopen(true);
    },
    [setUrl]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setopen(false)}
      >
        <Alert
          onClose={() => setopen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          File Selected Successfully
        </Alert>
      </Snackbar>
      <label className="mb-2 text-[13px]  block text-black font-poppins dark:text-white">
        {props.label}
      </label>
      {Url ? (
        <Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: 2,
              marginTop: 1,
            }}
          >
            <Text className="text-center border-dashed border p-4">
              {Url?.name}
            </Text>
          </Box>
          <Text
            variant="contained"
            style={{
              width: "100%",
              marginTop: 2,
              textAlign: "center",
              color: theme.palette.primary.main,
              cursor: "pointer",
            }}
            onClick={() => setUrl("")}
          >
            Remove File
          </Text>
        </Box>
      ) : (
        <Box {...getRootProps()}>
          <input {...getInputProps()} />
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              margin: "auto",
              backgroundColor: "#fafafa",
              color: "#bdbdbd",
              outline: "none",
              transition: "border .24s ease-in-out",
              marginTop: 1,
              textAlign: "center",
            }}
            className="border border-dashed"
          >
            <Text>{message ?? "Upload Image here..."}</Text>
          </Box>
        </Box>
      )}

      {props.errors && props.touched ? (
        <Text
          style={{
            color: "red",
            fontSize: 12,
            marginTop: 15,
          }}
        >
          {props.errors}
        </Text>
      ) : null}
    </Box>
  );
}

export default UploadDocument;
