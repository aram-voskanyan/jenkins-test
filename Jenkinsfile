pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                    sh 'npm i'
                    sh 'npm test'
                }
            }
        }
    }
}
