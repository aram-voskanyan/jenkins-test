pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                    def scmVars = checkout scm
                    def commitId = "${scmVars.GIT_COMMIT.take(8)}"
                    def version = $(npm run version --silent)
                    
                    echo "${version}"
                    echo "${commitId}"
                    sh 'echo --- executing pipeline ---'
                    sh 'echo ${branch}'
                }
            }
        }
    }
}
