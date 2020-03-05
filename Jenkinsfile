pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                    def scmVars = checkout scm
                    def commitId = "${scmVars.GIT_COMMIT.take(8)}"
                }

                sh 'echo --- executing pipeline ---'
                sh 'echo ${branch}'
                sh 'echo ${commitId}'
            }
        }
    }
}
