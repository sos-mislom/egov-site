1. Скопируйте `.env.example` в `.env` и укажите ссылки:
   - `NEXT_PUBLIC_TELEGRAM_URL=https://t.me/egov39`
   - `NEXT_PUBLIC_VK_URL=https://vk.com/egov39`
   - `NEXT_PUBLIC_EXTENSION_REPO=https://github.com/sos-mislom/egov66-extention`

2. Соберите образы:
   - `sudo docker build -f Dockerfile.system -t lab-4-system:latest .`
   - `sudo docker build -f Dockerfile.build -t lab-4-build:latest .`
   - `sudo docker build -f Dockerfile.runtime -t lab-4-app:latest .`

3. Запустите `sudo docker compose up -d` (после изменения `.env` достаточно перезапустить контейнер).
