node {
    stage('Checkout') {
        checkout scm
    }
    stage('build') {
        docker.image('node:10.9.0-alpine').inside(' -u 0') {
            //withEnv(["Home=/tmp"]) {
            //    dir('~') {
            //        sh 'ls -alh'
            //    }
            // }
        }
    }
}
