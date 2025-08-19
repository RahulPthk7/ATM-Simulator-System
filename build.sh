#!/bin/bash

# Build script for ATM Simulator System

echo "Building ATM Simulator System..."

# Create build directory if it doesn't exist
mkdir -p build/classes

# Compile Java files
echo "Compiling Java source files..."
javac -cp "ATM-Simulator-System/lib/*" -d build/classes ATM-Simulator-System/src/ASimulatorSystem/*.java

# Copy resources (icons, images)
echo "Copying resources..."
cp -r ATM-Simulator-System/src/ASimulatorSystem/icons build/classes/ASimulatorSystem/

# Create executable JAR
echo "Creating executable JAR..."
cd build/classes
jar cvf ../../atm-simulator.jar ASimulatorSystem/*.class ASimulatorSystem/icons/*
cd ../..

# Set execution permissions
chmod +x atm-simulator.jar

echo "Build completed successfully!"
echo "Run with: java -jar atm-simulator.jar"
