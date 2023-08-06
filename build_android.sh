#!/bin/bash
docker run -ti --rm \
-v $(pwd):/myApp:rw \
-w /myApp \
beevelop/ionic:latest \
bash -c " \
    rm -rf android && \
    rm -rf build && \
    npm install && \
    npm run build && \
    npx cap add android && \
    yes | /opt/android/tools/bin/sdkmanager --update && \
    yes | /opt/android/tools/bin/sdkmanager --licenses && \
    cd android && \
    ./gradlew assembleDebug && \
    cd .. && \
    mkdir -p APK && \
    cp android/app/build/outputs/apk/debug/app-debug.apk APK/app-debug.apk \
"