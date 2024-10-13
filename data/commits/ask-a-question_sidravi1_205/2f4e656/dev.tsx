            {NEXT_PUBLIC_GOOGLE_LOGIN_CLIENT_ID === "not-set" ? null : (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="body1" sx={{ py: 4 }}>
                  - or -
                </Typography>
                <div id="signinDiv"></div>
              </Box>
            )}