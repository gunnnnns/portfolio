import '../CSS/Resume.css' ;

const Resume = () => {
  return (
    <div id = "resume">
	    <em>1.기초 자료</em>
	    <table>
		    <tr>
			    <td  bgcolor="#e3fcff">성 명</td>       한건희</tr>
		    <tr>
  			  <td bgcolor="#e3fcff">주민등록번호</td>
	  		  <td colspan="3">000428-3******</td>
  		  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">E-mail</td>
	  		  <td colspan="3">adg262644@gmail.com</td>
	  	  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">전화번호</td>
	  		  <td>02-462-2512</td>
	  		  <td bgcolor="#e3fcff">휴대폰</td>
	  		  <td>010-5211-1901</td>
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#e3fcff">우편번호</td>04800
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#e3fcff">주소</td>
	  	  	<td colspan="3">서울시 성동구 송정동 동일로237 아이파크 103동 1003호</td>
	  	  </tr>	
	    </table>

      <em>2.학력사항</em>
      <table>
      <tr>
	      <th bgcolor="#e3fcff">기간</th>
	      <th bgcolor="#e3fcff">상세내용</th>
	      <th bgcolor="#e3fcff">비고</th>
      </tr>
	    <tr>
	  	  <td>초등학교</td> <td>송원초등학교</td> <td>졸업</td>
	    </tr>
	    <tr>
	    	<td>중학교</td> <td>경수중학교</td> <td>졸업</td>
	    </tr>
	    <tr>
	    	<td>고등학교</td>	<td>경일고등학교</td> <td>졸업</td>
	    </tr>
	    <tr>
	    	<td>대학교 </td> <td>가천대학교</td> <td>재학중</td>
	    </tr>
    </table>


    <em>3. 개인능력 및 장단점</em>
    <table>
	    <tr height="30">
	  	  <td rowspan="4" bgcolor="#e3fcff">자격증 및 포상</td>
	  	  <td colspan="3">정보처리기사</td>
	  	  <td colspan="1">한국산업인력공단</td>
	    </tr>
	    <tr height="30"> 
        <td colspan="3">OCP</td>
        <td colspan="1">오라클</td>
  	  	</tr>
		<tr height="30"> 
        <td colspan="3">리눅스마스터</td>
        <td colspan="1">한국정보통신진흥협회</td>
  	  	</tr>
		<tr height="30"> 
        <td colspan="3">네트워크관리사</td>
        <td colspan="1">한국정보통신진흥협회</td>
  	  	</tr>
  	  <tr height="30"> 
        <td rowspan="2" bgcolor="#e3fcff">컴퓨터능력</td>
  		  <td colspan="2">JAVA</td>
        <td bgcolor="#e3fcff">상/중/하</td>상
      </tr>
	    <tr height="30" > 
		    <td colspan="2">Database</td>
        <td bgcolor="#e3fcff">상/중/하</td>
	  	  <td>상</td>
      </tr>
	    <tr height="30"> 
		    <td rowspan="2" bgcolor="#e3fcff">취미</td>
		    <td colspan="2">스프링 웹 개발</td>
        <td bgcolor="#e3fcff">특기</td>
		    <td>스프링 웹 개발</td>
      </tr>
    </table>

		<div id="pledge">
			<br/>위의 사실이 틀림이 없음을 서약합니다.<br/>
      작성일 2023년 10월 25일<br/>
    	작성자 (인) 
		</div>
  </div>
  );
};

export default Resume;