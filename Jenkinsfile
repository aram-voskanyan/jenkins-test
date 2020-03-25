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
                    if ("${branch}" == 'master') {
                        sh 'echo  ----------'
                    } else {
                        sh 'echo  ++++++++++'
                    }
                    
                    sh "echo A=${branch} > .env"
                    sh "echo B=${version} >> .env"
                    sh "cat .env"
                    
                    //sh 'echo ${testVar}'
                }
            }
        }
    }
}
