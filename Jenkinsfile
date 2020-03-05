pipeline {
    agent any
    stages {
        node {
            stage('build') {
                def scmVars = checkout scm
                def commitId = "${scmVars.GIT_COMMIT.take(8)}"

                steps {
                    sh 'echo --- executing pipeline ---'
                    sh 'echo ${branch}'
                    sh 'echo ${commitId}'
                }
            }
        }
    }
}
