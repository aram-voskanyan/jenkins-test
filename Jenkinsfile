pipeline {
    agent any
    stages {
        node {
            stage('build') {
                steps {
                    def scmVars = checkout scm
                    def commitId = "${scmVars.GIT_COMMIT.take(8)}"
                    
                    sh 'echo --- executing pipeline ---'
                    sh 'echo ${branch}'
                    sh 'echo ${commitId}'
                }
            }
        }
    }
}
