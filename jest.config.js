module.exports = {
    // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록입니다.
    // 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
    // E.g. `import HelloWorld from '~/components/HelloWorld!';`
    moduleFileExtensions: [
        'js',
        'vue'
    ]


    // `~` 같은 경로 별칭을 매핑합니다.
    // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
    // E.g. `import HelloWorld from '~/components/HelloWorld';`
        moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1'
    },


}