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
                    def version = sh (
                        script: 'bash ./package-version.sh ./package.json',
                        returnStdout: true
                    ).trim()    
                    
                    echo "${version}"
                    //echo "${commitId}"
                    //sh 'echo --- executing pipeline ---'
                    if (${branch} == 'master') {
                        sh 'echo ${branch} ----------'
                    } else {
                        sh 'echo ${branch} ++++++++++'
                    }
                    
                    //sh 'echo ${testVar}'
                }
            }
        }
    }
}
