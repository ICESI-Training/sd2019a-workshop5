# Use an official Python runtime as a parent image
FROM python:alpine3.9

# Set the working directory to /app
WORKDIR /app

# Copy the smartlabs directory contents into the container at /app
COPY smartlabs /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "greedy.py"]

