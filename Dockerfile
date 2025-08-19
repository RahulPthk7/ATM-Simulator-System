# Use OpenJDK 11 as base image
FROM openjdk:11-jre-slim

# Set working directory
WORKDIR /app

# Install required packages
RUN apt-get update && apt-get install -y \
    libx11-6 \
    libxext6 \
    libxrender1 \
    libxtst6 \
    libxi6 \
    libxrandr2 \
    libasound2 \
    fontconfig \
    x11vnc \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

# Copy the compiled JAR files and dependencies
COPY ATM-Simulator-System/build/classes/ /app/classes/
COPY ATM-Simulator-System/lib/ /app/lib/

# Copy source images/icons
COPY ATM-Simulator-System/src/ASimulatorSystem/icons/ /app/classes/ASimulatorSystem/icons/

# Set classpath
ENV CLASSPATH=/app/classes:/app/lib/*

# Expose port for web interface (if we add web server)
EXPOSE 8080

# Create a script to run the application
RUN echo '#!/bin/bash\n\
echo "ATM Simulator System"\n\
echo "Starting virtual display..."\n\
Xvfb :1 -screen 0 1024x768x16 &\n\
export DISPLAY=:1\n\
echo "Starting ATM application..."\n\
java -cp $CLASSPATH ASimulatorSystem.Login\n\
' > /app/start.sh

RUN chmod +x /app/start.sh

# Run the application
CMD ["/app/start.sh"]
