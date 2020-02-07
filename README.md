# Node JS API
이 저장소의 코드는
[http://a-mean-blog.com/ko/blog/Node-JS-API](http://a-mean-blog.com/ko/blog/Node-JS-API)에서 작성되었습니다.
<br>

## 파라미터 생성 
```json
{
	"username": "oauth2",
	"password": "oauth2",
	"passwordConfirmation": "oauth2",
	"name": "oauth2"
}
```

## MongoDB 쿼리문
//DB사용
use oauth2

//데이터베이스에 사용자 인증db.
db.auth()

//Creates a new user.
createUser()

//Updates user data.
db.updateUser()

//사용자 패스워드 변경
db.changeUserPassword()

//데이터베이스에 관련된 모든 사용자를 삭제한다.
db.dropAllUsers()

//한 사용자를 삭제한다
db.dropUser()

//롤과 권한을 사용자에 허용한다
db.grantRolesToUser()

//사용자에 부여한 롤을 삭제한다
db.revokeRolesFromUser()

//지정한 사용자의 정보를 반환한다
db.getUser()

//데이터베이스에 관련된 모든 사용자의 정보를 반환한다
db.getUsers()

## 환경변수 설정
// 설정
export KEY="VALUE"
export JWT_SECRET="JEMS_Key"
export MONGO_DB_LOGIN_API="mongodb://localhost:16010/oauth2?authSource=oauth2"

// 조회
printenv