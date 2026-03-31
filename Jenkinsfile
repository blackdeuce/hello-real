pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Run App') {
            steps {
                sh 'node src/app.js'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
