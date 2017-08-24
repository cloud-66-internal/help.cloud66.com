

## Requirements

- OS: We currentlu only support **Ubuntu 16.04** and it needs to be **freshly installed** on your server.
- Connection: For security reasons, Cloud 66 only connects to your server using your secure keys on **port 22**.
- Sudo: As Cloud 66 connects to your server and provisions applications from scratch, administrator permissions are sometimes necessary. Therefore our script creates a new user to use for deployment that is a member of the sudoers group and that does not require a password to invoke sudo.
- Bash: We currently only support Bourne-again shell (Bash). The error `sh: n: source: not found` during deployment may arise if you are not using the Bash shell.
- CPU Architecture: We currently only support deploying to 64bit CPU architectures.

