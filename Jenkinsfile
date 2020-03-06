pipeline {
    agent any
    environment {
        testVar = 'test variable'
    }
    stages {
        stage('build') {
            steps {
                script {
                    //def scmVars = checkout scm
                    //def commitId = "${scmVars.GIT_COMMIT.take(8)}"
                    def version = sh 'bash ./package-version.sh'
                    
                    echo "${version}"
                    //echo "${commitId}"
                    //sh 'echo --- executing pipeline ---'
                    //sh 'echo ${branch}'
                    //sh 'echo ${testVar}'
                }
            }
        }
    }
}
