import React,{useEffect} from "react";
import { Cell } from "./Cell";
import '../../../scss/arrow.scss'
export const Show = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="show-arrows">
    <div className="arrows">
      <div className="row">
        <Cell value={props.number3}/>
        <Cell value={props.number6} />
        <Cell value={props.number9} custom="none-border"/>
      </div>
      <div className="row">
        <Cell value={props.number2} />
        <Cell value={props.number5} />
        <Cell value={props.number8} custom="none-border1"/>
      </div>
      <div className="row">
        <Cell value={props.number1} custom="none"/>
        <Cell value={props.number4} custom="none1"/>
        <Cell value={props.number7} custom="none-border2"/>
      </div>
      <div className="center" style={{marginTop: "1rem"}}>
        <i>Biểu đồ ngày sinh {props.date}</i>
      </div>
    </div>
    <div className="show-arrows">
      <div className="the-arrows">
        <div className="arrow">
            {props.arrow159 !== "" ?
            <div>
              <div className="title">
                MŨI TÊN 1-5-9: MŨI TÊN QUYẾT TÂM
              </div>
              <div className="text">
                <p>
                🔆 Bất kỳ người nào sinh trong thế kỷ 20 (tức có năm sinh là 19…), mà sinh vào tháng Năm, hoặc có số 5 đâu đó trong ngày sinh của mình, đều có Mũi tên chỉ Quyết tâm trong biểu đồ ngày sinh của mình. Đặc biệt, tất cả những người sinh trong thập kỷ 1950 đều có Mũi tên này. Điều này là do trong thế kỷ 20, mỗi người sinh ra đều có sẵn ‘vốn liếng’ là số 1 và số 9, vì vậy, chỉ cần thêm số 5 vô thôi, là đủ. Vì thế, Mũi tên Quyết tâm đã lừng lừng lẫy lẫy trở thành mũi tên thường gặp nhất trong tất cả ngày sinh của những người sinh ra trong thế kỷ 20. Rõ ràng điều này tạo nên một sự thuận lợi rất lớn, khi thế kỷ 20 có rất nhiều người có chí quyết tâm lớn, dẫn đến nhiều thành tựu đạt được trong suốt thế kỷ này, và dẫn nối sang chặng đầu của thế kỷ 21 này, khi những người của thế kỷ 20 vẫn còn đang trong lứa tuổi trưởng thành và làm việc chính thức cho xã hội.
</p>
<p>
Nếu chịu khó nhìn lại thêm chút nữa, bạn sẽ thấy quả thật rất nhiều người được sinh ra trong thập kỷ 1950-1959 rất thành công, cho đến tận bây giờ.
</p>
<p>
🔆 Nếu ai có được Mũi tên Quyết tâm này trong biểu đồ ngày sinh, dễ thấy họ rất kiên trì thực hiện Bất kỳ điều gì họ muốn làm, vượt qua mọi trở ngại, làm cho đến khi nào được thì thôi. Thật mừng cho những ai có được Mũi tên này, bởi nếu thiếu quyết tâm, cuộc đời bạn cũng chịu khá nhiều cản trở làm nhụt chí. Tuy vậy, những người có Mũi tên Quyết tâm cũng cẩn trọng nha, đôi khi sự quyết tâm quá độ của bạn sẽ dẫn đến… sự cố chấp bướng bỉnh, cứ đâm đầu vào giải quyết một vấn đề mặc dù biết nó không lối thoát hoặc không cần thiết, dẫn đến mất nhiều thời gian hay tiêu hao nhiều năng lượng; hoặc nhất nhất… ngồi chờ cho đến khi nào chướng ngại tan biến, rồi… lao vô giải quyết tiếp, cũng mất thời gian lắm đó! Tương tự như vậy, một trong những bài học lớn nhất mà người có Mũi tên Quyết tâm nên thấu: Không phải vấn đề nào cũng cần phải giải quyết. Cái gì cũng lao vào giải quyết, mệt lắm đó 🤪
</p>
<p>
Thay vào đó, những ai có Mũi tên này nên chọn một con đường trung dung, nghĩa là không nên quá cố chấp như vậy, mà hãy tập phát huy tối đa trực giác, trí tuệ và lòng thương của mình, biết lúc nào nên tiếp tục dấn bước lúc nào nên dừng lúc nào nên buông, sẽ giảm thiểu được nhiều thời gian và tiết kiệm được nhiều năng lượng, qua đó cũng mở trí thêm nhiều nhen!
</p>
<p>
🔆 Tính quyết đoán của những người có được Mũi tên 1-5-9 là một tư chất đẹp đẽ, cũng là một cá tính rất mạnh. Nhưng nhớ sử dụng nó một cách thông minh và đúng việc nha. Những người mang Mũi tên này mà có số 1 thành từng chùm (từ hai số 1 trở lên, ví dụ: 11, 111, 1111…) càng phải lưu ý điều này kỹ, vì số 1 càng nhiều, Cái Tôi càng được nhấn mạnh, càng dễ trở nên cố chấp vào Cái Tôi mà quyết làm những việc bướng bỉnh (Ví dụ 2: người sinh ngày 15.11.1971).
</p>
<p>
🔆 Mũi tên Quyết tâm Kép (11-55-99): Cũng không khó tìm một số người có cặp đôi số lặp lại ở cả ba số thành viên, cụ thể là 11-55-99 (Ví dụ 2: người sinh ngày 15.2.1959); hoặc thậm chí, trên toàn bộ biểu đồ ngày sinh hoàn toàn không còn con số nào khác ngoại trừ Mũi tên Quyết tâm kép 11-55-99 (Ảnh, Ví dụ 3: người có ngày sinh 10.5.1995)… Những người này sẽ có gấp đôi sức mạnh quyết tâm của Mũi tên này. Tuy vậy, những ai có ‘Mũi tên Quyết tâm kép’ này cần rất nhiều trực giác khôn ngoan chỉ dẫn để đưa ra những quyết định sáng suốt trước khi họ lao vào một chuỗi những quyết định mà sau này có thể họ sẽ hối tiếc.
</p>
<p>
🔆 Mục đích của Mũi tên Quyết tâm này nhìn chung hướng về những tham vọng, ước vọng hay lý tưởng mà Số 9 thể hiện ở đầu Mũi tên, khi đầu Mũi tên chỉ có mỗi một số 9. Chứ khi trong Mũi tên có bất kỳ một con số nào được nhân lên, sức mạnh của con số đó sẽ được nhấn mạnh nhất. Chẳng hạn, nếu trong Mũi tên chỉ có mỗi số 1 được nhân đôi: 11-5-9, hướng quyết tâm sẽ thể hiện ở sự biểu đạt cá tính cá nhân; nếu chỉ có mỗi số 5 được nhân đôi: 1-55-9, tình cảm hoặc sự tự do cảm xúc được nhấn chính. Nếu chỉ có mỗi số 9 được nhân đôi: 1-5-99, cá tính sẽ chủ yếu hướng về tham vọng hay lý tưởng của người đó, tùy thuộc vào Con số Chủ đạo của người ấy hoặc những con số kép khác có mặt trong Biểu đồ. Nếu các số kép khác chủ yếu tập trung ở dãy Thể chất (1-4-7), người ấy sẽ tập trung vào phần tham vọng, hoài bão; còn nếu các số kép khác tập trung vào dãy Tâm hồn (2-5-8) hay Tâm trí (3-6-9), người ấy sẽ có quyết tâm tập trung vào phần lý tưởng sống (Ảnh, Ví dụ 4: người sinh 22 – 9 – 1965)…
</p>
<p>
🧒👦👧 TRẺ CON:
</p>
<p>
Trẻ con có Mũi tên 1-5-9 này thường bày tỏ sự cương quyết (hay nói cách khác, là ‘tánh lì’, ‘tính bướng’ của mình ngay từ khi còn rất bé (Hahah bạn Quỳnh Hương chớ ai, từ nhỏ đã… cự tuyệt mặc đồ giống nhau giữa bốn chị em, theo ý của mẹ Tư Hương Mama, bị phạt hoài hỏng ngán!) Đây là một đặc điểm nổi trội và đáng được tôn trọng tạo điều kiện cho chúng có không gian thể hiện cá tính mạnh này, tuy nhiên chúng vẫn cần được dạy dỗ huấn giáo để hiểu chuyện, và dung hòa mọi điều. Khi có con có Mũi tên 1-5-9 này, ba mẹ hoặc thầy cô giáo không bao giờ nên dùng hình phạt hay biện pháp mạnh để cấm đoán hay ép buộc trái ý chúng, mà nên dẫn dắt chúng nhẹ nhàng bằng tình thương, sự tử tế, cùng với sự linh hoạt mềm dẻo nhưng kiên định, thì mới ‘lèo lái’ chúng đi trong con đường chúng ta hướng chúng được.
<p></p>
Nhìn chung, trẻ con dạng này thuộc loại khá thông minh, chịu nghe lý lẽ phải, nhưng cũng sẽ sẵn sàng ‘lý lẽ cho tới bến’ với người lớn nếu chúng nhìn ra lỗi gì trong các lời giải thích đó. Tóm lại, nếu có con trẻ có Mũi tên 1-5-9, ba mẹ hoặc thầy cô giáo nên tạo điều kiện cho các con có đủ không gian và cơ hội để thể hiện cá tính, nhưng kiểm soát ở mức vừa phải để trẻ không được nước lấn tới, phát triển quá độ thành tính bướng bỉnh, lì lợm, dễ làm hại đến đời sống hạnh phúc lúc trưởng thành do hay có thái độ bướng bỉnh tiêu cực trước các tình huống. Nhưng đồng thời, nhất định tạo mọi điều kiện có thể cho chúng phát triển tính quyết tâm này theo hướng tích cực, đây sẽ là ‘Cá tính vàng’ để góp phần tạo nên thành công cho cuộc đời trẻ sau này.
</p>
              </div>
            </div>
            : ""}
        </div>
        <div className="arrow">
            {props.arrow357 !== "" ? 
            <div>
              <div className="title">
                  MŨI TÊN 3-5-7: MŨI TÊN TÂM LINH
              </div>
              <div className="text">
                <p>
              Mũi tên này hình thành từ ô chứa số 3 bên góc trên, trái, kéo dài xuống số 7 nằm ở góc dưới cùng, bên phải. Điểm dễ thấy của những người có Mũi tên này là họ sẽ không chịu bất kỳ Mũi tên Trống nào khác, do ba số rải đều lên cả ba trục ngang và cả trục dọc. Và thêm một lợi thế lớn nữa: tất cả những người có Mũi tên 3-5-7 sinh ra trong thế kỷ 20 đều mặc định 'tặng' thêm Mũi tên Quyết tâm: 1-5-9 nữa, do luôn có sẵn đôi số 1-9 trong năm sinh (Xem Ví dụ 1: Ngày sinh 7/5/1973, Ví dụ 2: 3/7/2005). Vậy xét ra, những người thuộc nhóm này mà sinh ra trong thế kỷ 20 đều có được 'số vốn' khá mạnh, mặc dù so với người sinh 3/7/2005, người sinh 7/5/1973 có thể chịu nhiều thử thách chông gai hơn, do có đến hai số 77 trong ngày sinh - vốn là các 'tín hiệu' để chỉ "Những bài học lớn học được từ mất mát hy sinh." (Xem lại các bài chỉ ý nghĩa các con số trong Biểu đồ ngày sinh).
              </p>
              <p>
Xét về mặt ý nghĩa, Mũi tên 3-5-7 còn lợi hại ở chỗ nó kết nối ba con số mạnh nhất đại diện cho từng nhánh: Số 3 của trục Tâm trí – Số 5 của trục Tâm hồn – Số 7 của trục Thể chất. Từng con số này, khi đứng rời nhau, từng là những con số chủ đạo trong nhiều trường phái tâm linh, thần học hay triết học khác nhau từ Đông sang Tây, vì vậy, không có gì ngạc nhiên khi kết liền lại với nhau, chúng tạo thành một mức độ ý thức tâm linh sâu sắc. Những khả năng nhận thức tâm linh này thường được rút tỉa từ trải nghiệm tự thân, nên những người mang mũi tên này… ít khi nào chịu nghe lời khuyên từ người khác. Khi có điều xảy ra, họ thích tự mình nhúng mình vào, trải nghiệm, cảm nhận và rút ra bài học.
</p>
<p>
Khuynh hướng này thường đem đến hệ quả là… họ đã phải chịu nhận nhiều bài học buồn đau trong chặng đầu tiên của cuộc đời, nhưng chính những bài học này lại là nguồn cơn luyện rèn chí can cường nơi họ, để rồi qua đó, họ vỡ ra được những cảm thụ sâu sắc về triết lý sống ở đời, cũng từ đó mà trưởng thành.
</p>
<p>
Với những trải nghiệm mạnh mẽ và sâu đậm, những ai ý thức sống tích cực và nhận thức được sức mạnh của tình yêu thương sẽ dần tự hình thành nên một sức mạnh nội tại khó bì. Để rồi từ đó, một sự tĩnh lặng và bình thản tỏa ra từ họ, bộc lộ vẻ đẹp tinh thần của họ.
</p>
<p>
🤗 TRẺ CON có Mũi tên 3-5-7 này thường tỏ ra rất tin người – đôi khi có phần quá ngây thơ, và các con cũng có một thiên hướng coi sự công bằng là đương nhiên. Vì thế, các con nên được chăm sóc và quan tâm một cách đặc biệt, và đừng bao giờ nghĩ nên nói dối các con cho qua chuyện, dù bất cứ lý do gì. Một khi trẻ này nghi ngờ ba mẹ hay người lớn có chuyện lừa dối chúng, niềm tin của chúng sẽ bị tan vỡ, và từ đó, chúng sẽ trở nên đặc biệt phản ứng với những lừa đối này, cuộc sống của chúng từ đó cũng sẽ bị xáo động mạnh mẽ.
</p>
<p>
👧👦🧒 Những đứa trẻ này rất cần được dìu dắt để tiếp cận các vấn đề tinh thần sâu hơn, khuyến khích trẻ học hỏi các tôn giáo và các hệ thống triết lý sống khác nhau, để xem chúng phù hợp với tôn giáo hay hệ thống nào, và cũng để qua đó, trẻ sẽ được cơ hội tiếp cận và thẩm thấu những giá trị tâm linh hay giá trị đạo đức làm tốt đẹp hơn cuộc sống làm người. Trẻ có những sức thẩm thấu giá trị tâm linh rất cao, nhưng thường thì độ non nớt trong đời sống giai đoạn đầu cũng ít nhiều cản trở khả năng đánh giá, nhìn nhận vấn đề, cũng như cản trở khả năng diễn đạt những gì chúng cảm nhận sâu sắc trong lòng. Điều này có thể dẫn đến sự ấm ức, tức giận nơi trẻ.
</p>
<p>
Lúc này đây, nên khuyến khích trẻ đọc những quyển sách được bố mẹ/thầy cô chọn lọc kỹ lưỡng, thay vì cho trẻ xem các chương trình truyền hình phổ thông vốn có nhiều nguy cơ ẩn chứa sự bạo động hay cảm xúc tiêu cực. Điều này đặc biệt cần thiết và bổ ích trong giai đoạn trẻ đang phát triển khả năng nhận thức tâm linh của mình. Bố mẹ của các trẻ này cũng nên cùng con tìm hiểu qua những lĩnh vực mà trẻ có thể đã có sẵn mầm nhưng chưa hiển lộ, như trực giác, hay khả năng ngoại cảm (tiếng Anh là Extrasensory perception – ESP). Có thể những điều này sẽ giúp con bạn rất nhiều sau này, mà không làm chúng sợ hãi vì sao thấy bản thân mình hơi… khác người.
</p>
              </div>
            </div>:""}
        </div>
        <div className="arrow">
            {props.arrow369 !== ""?
            <div>

            </div>
            :""}
        </div>
        <div className="arrow">
            {props.arrow258 !== ""?
            <div>
              <div className="title">
                MŨI TÊN 2-5-8: MŨI TÊN CÂN BẰNG CẢM XÚC
              </div>
              <div className="text">
                  <p>
                    Mũi tên này chỉ sự cân bằng về mặt cảm xúc. Tuy nhiên, những người có mũi tên này cũng phải để ý, vì lợi cũng có phần lợi, nhất là ở phần thiên hướng nghề nghiệp, nhưng cảm xúc chưa chắc thật sự "cân bằng" mọi lúc mọi nơi.
                  </p>
                  <p>
                    Theo quyển <i>The complete Book of Numerology</i>, Mũi tên Cân bằng cảm xúc được tạo thành từ sự có mặt của cả ba con số 2, 5, và 8 trên Trục ngang Tinh thần ở giữa Biểu đồ ngày sinh. Trong ba trục ngang quan trọng của con người, Trục ngang Tinh thần cho chúng ta thấy nhiều cách biểu đạt bản thân đa dạng phong phú nhất ở con người. Và nó cũng là trục chỉ cảm xúc, nên người có Mũi tên 2-5-8 này sẽ có nhiều phong thái khác nhau cho từng hoàn cảnh khác nhau.
                  </p>
                  <p>
                    Nói về mặt bẩm sinh, những người có Mũi tên 2-5-8 sở hữu khả năng cân bằng tự nhiên trong đời sống cảm xúc và một nhận thức khá sâu sắc về các giá trị tinh thần, thậm chí là tâm linh. Điều này đặc biệt giúp ích cho họ khi thế giới bắt đầu đi vào Kỷ nguyên mới của Nhận thức, từ thiên niên kỷ 2000 trở đi. Đối với những người này, cuộc sống là sự hòa hợp giữa đời sống vật chất và tâm linh, mà trong đó, phần vật chất là tạm thời, còn tâm linh mới là vĩnh cửu. Nhận thức này tác động khá rõ lên thái độ của họ với cuộc sống, cũng như xu hướng nghiêm túc mọi lúc mọi nơi của họ.
                  </p>
                  <p>
                    Họ nên tìm kiếm những người bạn đồng hành vui vẻ, lạc quan, và thỉnh thoảng tìm đến những phương tiện giải trí nhẹ nhàng để tránh trở nên quá mức nghiêm trọng và sống quá nội tâm. Họ hiểu được thế nào là cân bằng ở khía cạnh cảm xúc và tinh thần, nhưng lại hay bỏ qua ý nghĩa sâu rộng hơn của nó ở những khía cạnh khác trong cuộc sống, như mặt thể chất và trí não chẳng hạn. Nhiều người trong số này thường tìm đến các lĩnh vực nghệ thuật hay giải trí để giải tỏa nhu cầu diễn đạt cảm xúc bản thân một cách cân bằng, nhưng hãy nhớ rằng nghệ thuậ và giải trí chỉ là nghệ thuật giải trí, đừng để bản thân đắm chìm vào những hình tượng được thể hiện trong đó.
                  </p>
                  <p>
                    Để duy trì được sự cân bằng cảm xúc dài lâu, họ cần ý thức mình chính là người chịu trách nhiệm về những cảm xúc của mình, và không để cho cảm xúc khống chế bản thân, họ sẽ bị lạc lối và mất phương hướng.
                  </p>
                  <p>
                    Với khả năng kiểm soát cảm xúc mạnh mẽ như vậy, những người có Mũi tên 2-5-8 có thể trở thành những diễn viên xuất sắc. Sự nhạy cảm bẩm sinh cho phép họ nhập tâm hoàn toàn vào những vai diễn mà không phải hy sinh các đặc điểm tính cách riêng. Nhưng cho dù có làm diễn viên hay không thì những người này sẽ đóng nhiều vai trò cảm xúc khác nhau trogn các hoạt động thường ngày, tại chỗ làm, trong các mối quan hệ xã hội và ở nhà.
                  </p>
                  <p>
                    Sự nhạy cảm được cân bằng của những người có mũi tên này giúp họ ý thức được nhu cầu và thái độ của người khác một cách rõ ràng, tự nhiên. Khả năng này có thể được phát huy và giúp họ tỏa sáng trong lĩnh vực tư vấn hay chăm sóc sức khỏe, bởi họ đã có sẵn thiên khiếu ở những lĩnh vực này. Tuy nhiên, để đạt được thành công, họ nên được đào tạo một cách bài bản về kỹ năng chăm sóc sức khỏe, bởi họ đã sẵn có thiên khiếu ở những lĩnh vực này. Tuy nhiên, để đạt được thành công, họ nên được đào tạo một cách bài bản về kỹ năng chăm sóc sức khỏe, để tránh rơi vào chủ nghĩa giáo điều - vì trong lĩnh vực này, không có phương pháp của ai là phương pháp đúng duy nhất. (Không chỉ riêng những người có mũi tên này, mà tất cả những ai ước vào lĩnh vực y học và chăm sóc sức khỏe đều nên chủ động cời mở và tiếp thu những phương pháp điều trị khác nhau.) Và trên hết, người có Mũi tên 2-5-8 cần nhận thức được rằng họ có bản chất nhạy cảm, giàu cảm xúc và một trực giác phát triển.
                  </p>
                  <p>
                  🤗 Trẻ em có Mũi tên 2-5-8 trong Biểu đồ ngày sinh thường vô cùng nhạy cảm, có thể có năng lực tâm linh mạnh mẽ, nên trẻ có thể bị chìm đắm trong thế giới của mình và được xem như những "kẻ mơ mộng". Chúng dễ bị cuốn vào những mâu thuẫn cảm xúc, nhưng có khuynh hướng thu mình lại chứ không chủ động tham gia. Mong muốn tránh né những mối bất hòa có thể khiến trẻ tụt lại phía sau trong các hoạt động ở trường và làm tổn hại sức khỏe của trẻ, nếu chúng để cho sự nhạy cảm thường xuyên đẩy mình vào thế bị động, từ đó có những phản ứng tiêu cực trong nhiều tình huống. Các bậc phụ huynh nên ý thức dạy con cách giữ cân bằng về cảm xúc, điều mà chính cha mẹ cũng cần học để dạy con hiệu quả. Những đứa trẻ thuộc nhóm này cũng cần tránh những chương trình truyền hình hay phim ảnh quá ồn ào hoặc có nhiều yếu tố kích thích cảm xúc. Trẻ con có mũi tên này nên ưu tiên ăn các thực phẩm nguyên hạt và tự nhiên, hơn là thức ăn đóng gói và chế biến sẵn có nhiều hóa chất.
                  </p>
              </div>
            </div>
             :""}
        </div>
        <div className="arrow">
            {props.arrow147 !== "" ?
            <div>
              <div className="title">
                MŨI TÊN 1-4-7: MŨI TÊN THỰC TẾ
              </div>
              <div className="text">
                <p>
              Thực tế, sự có mặt của cả ba con số 3-6-9 trên cùng một trục ngang trên cùng – trục Tâm trí đã chỉ ra tầm quan trọng của trí thông minh và cách người có Mũi tên này chọn thể hiện bản thân mình ra sao. Một não bộ cực kỳ năng động sẽ là điều kiện quá thuận lợi cho trí nhớ thống lĩnh. Tuy vậy, mình thì chưa từng gặp qua, nhưng tác giả David A. Phillips bảo rằng có một số người sinh ra dưới Mũi tên này vẫn tỏ ra có trí nhớ kém dưới mức trung bình. Điều này khẳng định, là do họ đã lãng phí một tài nguyên to lớn, và lười động não. Nếu điều này không được phát hiện và điều chỉnh cho đúng, điều này kéo dài dẫn đến sự hoại tự nhiên của những gì không được sử dụng, và cuối cùng, người này sẽ chịu cảnh cô độc bởi khó ai chịu nổi tính gắt gỏng của họ. (Hy vọng bạn trang mình không có ai có người thân lâm vào cảnh tương tự ^^)
              </p>

<p> Nhìn chung, người có Mũi tên này thường sống khá tích cực, nhanh nhạy, sáng sủa, thích những gì mang tính học thuật hơn nghệ thuật. Họ thường đào sâu suy nghĩ hơn lặn ngụp trong các cảm giác, mặc dù đôi khi họ cũng khá giàu cảm xúc mà không tự nhận biết mình như vậy. Một điều mà các bạn có Mũi tên Vàng này cần ý thức trước để tránh, là họ sẽ… hơi ‘chảnh’, hehe, chỉ đi tìm bạn nào có… cái đầu ngang ngang họ trở lên để chơi. Hãy cố gắng phát triển lòng bao dung và tình thương, sự đồng cảm với những người kém may mắn hơn mình về mặt trí tuệ, chứ nếu không họ dễ phát bực vì những người xunh quanh "Sao ngốc quá!" Con người chúng ta đều có thể dần vượt qua các khiếm khuyết hay hạn chế của mình, miễn là chúng ta biết phát huy năng lực tự nhiên mỗi người luôn có. Nói nôm na, nếu anh là cá, anh sẽ giỏi bơi, anh là gấu, anh giỏi đi kiếm mật, vậy thôi à .
</p>
<p>
Những người này thường gặp không ít nghịch cảnh hay chướng ngại, nhưng họ thường giải quyết hay vượt qua các chướng ngại này một cách tốt đẹp. Họ cũng là những người quảng giao, dễ tìm lời thích hợp để giải thích các vấn đề một cách hợp lý, nhưng cẩn trọng nha, não chạy tốt cỡ nào cũng cần có lúc nghỉ ngơi đó! Nếu não không nghỉ ngơi đủ, những người này dễ bị bực dọc không có lý do rõ ràng. Khi nào những người có Mũi tên này cảm thấy những ‘triệu chứng’ như trên mô tả, đó là một dạng cảnh báo để bạn phải nghiêm túc coi và cân bằng lại đời sống tinh thần, thể chất và sự cảm thụ nghệ thuật nữa, để cuộc sống đạt được thành công cao nhất.
</p>
<p>
Có một điều này nghe có vẻ… sai sai, nhưng mà đúng nha: Những người có Mũi tên này sẽ không sử dụng trực giác tốt lắm đâu, nếu trong ngày sinh họ không có số 2 – chỉ trực giác, nằm ở trục ngang Tâm hồn. Nên nhớ, Trực giác thuộc Tâm hồn (Soul), không phải Tâm trí (Mental). Nên sẽ có đôi lúc những người rất thông minh, sáng trí này cũng bị… tắc nghẽn, không nắm bắt được một ý niệm đơn giản nào đó, chỉ vì… lúc đó họ không biết dùng đến trực giác của mình. Nên, cẩn thận, nhớ ‘mở công tắc’ trực giác lên thường thường, nha bạn, cho dù bạn có Mũi tên Sáng trí
</p>
<p>
🧒👦👧 TRẺ CON có Mũi tên Sáng trí thường nằm trong tốp học sinh đứng đầu trong lớp, trong trường, đặc biệt ở các môn học tự nhiên như Toán hay các môn phân tích. Các em nên được xếp như những học sinh đặc biệt, để được phụ đạo thêm những môn học sâu hơn mức phổ thông, bao gồm cả những dự án phát triển não bộ tốt, như các môn nghiên cứu, tìm hiểu về thiên văn học… Trẻ nhóm này thường năng động và ‘cứng đầu’, đặc biệt là khi não chúng không được kích hoạt đúng mực. Khi được gọi đến phụ giúp vấn đề gì về mặt nghiên cứu, tìm hiểu, trẻ rất nhiệt tình hợp tác, và rất thích được khen ngợi về những nỗ lực của mình.
</p>
<p>
Với trẻ con dạng này, ba mẹ hoặc thầy cô giáo nên để ý một số thứ cần tránh đưa vào thực đơn của trẻ, bao gồm các thức ăn giàu chất kích thích hay có các hóa chất nhân tạo. Khi tới tuổi thiếu niên, trẻ dạng này là những thiếu niên dễ phấn khích, dễ kích động, và dễ bị ‘tăng động’ sau khi ăn đồ ăn linh tinh.
</p>
<p>
Một vấn đề nữa mà trẻ có Mũi tên này cần tránh, là não bộ chúng thường… chạy nhanh hơn mồm miệng, nên một số em dễ mắc chứng ‘cà lăm’ (nói lắp), một cái tật cần được chỉnh càng sớm càng tốt. Sửa chứng này bằng cách nào ư? Bảo trẻ thư giãn nhiều hơn một chút, chơi nhiều môn thể thao hoặc bỏ nhiều giờ chơi thể thao, hòa nhập với thiên nhiên càng nhiều càng tốt, và ‘thoát ra khỏi não’ một chút, sẽ đỡ.
</p>
<p>
Hãy luôn nhớ rằng trẻ có Mũi tên này sẽ luôn gặp gì cũng phân tích, đánh giá, đo lường ^^ Chúng có thể dễ dàng phát hiện ra người ta có thành thật hay kém cởi mở với chúng hay không, hay chúng có đang bị lừa dối trắng trợn hay không. Chúng sẽ phản ứng lại bằng cách rút lại toàn bộ niềm tin đối với những người này. Nếu sự lừa dối này lặp lại nhiều lần, những đứa trẻ này sẽ trở nên vô cùng tức giận.
</p>
<p>
Vì vậy, việc có một đứa con có Mũi tên Sáng trí vừa là niềm vui niềm hãnh diện, vừa cũng là một nỗi lo lắng chăm sóc sao cho đúng mực để phát triển hết mức tài năng trí tuệ của con. Nhưng bạn đừng lo, trái tim ta giỏi lắm. Hãy lắng nghe trái tim mình, bạn sẽ biết bạn nên làm gì và cần làm gì để cho con bạn một tương lai tốt nhất 
</p>
                </div>
            </div>
            : ""}
        </div>
        <div className="arrow">
            {props.arrow123}
        </div>
        <div className="arrow">
            {props.arrow456}
        </div>
        <div className="arrow">
            {props.arrow789}
        </div>
      </div>
      <div className="emty-arrows">
      <div className="arrow">
            {props.emtyArrow159 !== "" ? 
            <div>
              <div className="title">
                MŨI TÊN TRỐNG 1-5-9: MŨI TÊN CHỈ TÍNH HAY TRÌ HOÃN
              </div>
              <div className="text">
                <p>
                Nhìn trên Biểu đồ ngày sinh, Mũi tên Trống 1-5-9 rõ ràng xẻ biểu đồ ra làm hai nửa, chia cắt những thành tố mang tính trực giác, phân tích (bao gồm 2,3,6) và các yếu tố mang tính mô tả thực tiễn, vật chất (bao gồm 4,7,8). Vì vậy, những ai mang Mũi tên Trống này sẽ dễ cảm thấy muốn lần lữa, trì hoãn mọi việc, thậm chí… không thèm làm luôn. Nếu bạn nhìn ra điều này ở con cái hay học sinh mình ở giai đoạn tuổi còn nhỏ, điều này có thể được điều chỉnh dần dần. Tuy vậy, nếu cứ để cá tính này kéo dài, trở nên ăn sâu vào gốc rễ, cá tính này sẽ thực sự phương hại đời sống người này, ảnh hưởng rất tiêu cực đến sự phát triển hay thành công của người ấy, và gây vô vàn khó chịu bực tức với cả bản thân người ấy lẫn mọi người xung quanh họ.
                </p>
                <p>
                </p>
              </div>
            </div>
            :""}
        </div>
        <div className="arrow">
            {props.emtyArrow357 !== "" ?
            <div>
              <div className="title">
                MŨI TÊN TRỐNG 3-5-7: MŨI TÊN CHỈ TÍNH HAY HOÀI NGHI
              </div>
              <div className="text">
                <p>
              Những người có Mũi tên trống 3-5-7 thoạt có vẻ… khá đa nghi, thường hay đặt câu hỏi “Tại sao” cho hầu như mọi vấn đề của cuộc sống. Điều này làm cho cuộc sống của họ… khá mệt, thậm chí có vẻ hơi tiêu cực đầu tiên. Tuy nhiên, sau khi đã cất công tìm hiểu cho tới tận cùng căn nguyên vấn đề, điều gì làm cho họ tin được, họ sẽ chấp nhận một cách rõ ràng; bằng ngược lại, cái gì họ đã không đồng tình với quan niệm đó, họ dẹp luôn.
              </p>
              <p>
 Bản chất của những người thuộc nhóm này là có máu tìm hiểu, lục lọi, nên có rất nhiều nhà nghiên cứu khoa học có Mũi tên đặc thù này. Nhìn chung, những người này sẽ bắt đầu nghiền ngẫm, tìm tòi trên cái nền căn cơ những điều chuẩn mà họ đang theo đuổi, và thường bỏ qua cơ hội đào sâu những khía cạnh vi tế hơn của đời sống con người thông qua mặt triết lý sống, hoặc có nhìn ra, cũng đặt vào vị trí thứ yếu.
 </p>
<p>
Từ quá nhiều điều phát hiện ra làm họ cảm thấy hồ nghi về cuộc sống, họ trở nên khá nóng nảy, dễ phản ứng. Những người này nếu không ý thức tự điều chỉnh sẽ trở thành nạn nhân của chứng hay lo lắng thái quá, kèm theo thường bị nhức đầu và một số các vấn đề tâm lý khác. Lo lắng, bồn chồn có thể đưa đến những tai nạn thường ảnh hưởng đến vùng đầu. Cho nên, với những người có Mũi tên trống 3-5-7, điều đặc biệt cần thiết là họ cần được phát triển một cái nhìn, cách hiểu sâu hơn về triết lý sống ở đời, những điều không chỉ được cảm nhận bởi năm giác quan vật lý thông thường.
</p>
<p>
 Nếu vì một lý do gì đó mà những người này cảm thấy thất vọng với một tôn giáo, tín ngưỡng hay một nền khoa học truyền thống, họ dễ phản ứng bằng cách tỏ ra bất cần. Và điều này lại dẫn đến sự chán nản nhiều hơn nữa với cuộc đời này. Vì thế, để đối mặt với khả năng này, một người biết mình có Mũi tên trống 3-5-7 tốt nhất nên tự phát triển cho mình một mục đích sống cụ thể, nuôi dưỡng lòng thương yêu con người, thương yêu muôn loài một cách mạnh mẽ hơn, và nâng cao mọi mặt biểu hiện của mình thông qua các hình thức nghệ thuật mà mình có ít nhiều khả năng, như viết lách, vẽ, âm nhạc, vân vân.
 </p>
 <p>
👧👦🧒 TRẺ CON VỚI MŨI TÊN TRỐNG 3-5-7 thường tỏ ra hay u sầu, tâm trạng lên xuống thất thường. Nhưng nếu cha mẹ trẻ hiểu tình cảnh này, chúng ta có thể điều chỉnh con lại để con biểu hiện được tích cực hơn, tìm được sự bình an nội tâm được tốt hơn, cách ly con khỏi các chương trình truyền hình náo nhiệt, các game ồn ào trên điện thoại hay máy tính bảng, hoặc bạn bè quá năng động theo lối ồn ào. Khi có điều gì làm trẻ con có Mũi tên trống này phật lòng, chúng trốn vào bên trong nội tâm mình. Sự cách biệt này là một cách để chúng hồi phục sự cân bằng cảm xúc hay tinh thần cần có.
</p>
<p>
❤ Bố mẹ có thể giúp con theo hai tầng hỗ trợ:
</p>
<p>
- Một mặt, khuyến khích con trẻ đọc nhiều sách về tự nhiên, khoa học, địa lý, thử tìm hiểu những lý do ẩn đàng sau mọi sự vật hiện tượng đang diễn ra và phát triển tính tò mò tích cực.
</p>
<p>
- Mặt nữa, khuyến khích trẻ trở nên chủ động hơn trong việc đeo đuổi một ngành nghệ thuật nào đó, như học chơi một nhạc cụ, học vẽ, làm đồ gốm, nặn tượng…</p>
<p>
Nên nhớ, trẻ con có Mũi tên trống 3-5-7 cần rất nhiều tình thương và cần được đối xử tử tế, nhưng KHÔNG ĐƯỢC quá nuông chiều. Hãy kiên nhẫn như vẫn phải vững và cứng chắc, nếu không, trẻ con có Mũi tên này sẽ rất biết cách… tận dụng sự cưng chiều của bạn, và… sinh hư. Nhưng ngược lại, ba mẹ cũng không bao giờ nên quay lưng lại với trẻ có Mũi tên này chỉ vì em ấy hành xử không đúng hay không hợp lẽ thường. Nhớ là trẻ nhóm này sẽ luôn dễ phản ứng mạnh với ba mẹ, vì vậy sự bỏ lơ hay tỏ ra ‘không thương nữa’ càng thổi bùng thêm sự phản ứng tiêu cực này, theo đúng cái cách mà trẻ biết: càng tỏ ra giận dỗi, hoặc cô lập bản thân. Điều này chỉ làm cho tình hình của trẻ xấu đi hơn mà thôi. Tình thương sẽ chiến thắng tất cả, nên các bố mẹ có cón nhóm này cố gắng tỏa tình thương vừa phải, nghiêm khắc vừa phải, nhen! Hơi cực chút xíu à, nhưng mình làm được mà, héng!
</p>
              </div>
            </div>
            :""}
        </div>
        <div className="arrow">
            {props.emtyArrow369}
        </div>
        <div className="arrow">
            {props.emtyArrow258}
        </div>
        <div className="arrow">
            {props.emtyArrow147}
        </div>
        <div className="arrow">
            {props.emtyArrow456}
        </div>
        <div className="arrow">
            {props.emtArrow789}
        </div>
      </div>
      <div className="full-arrows">
          {props.fullArrow}
      </div>
    </div>
    <div className="back">
                  <button onClick={props.click}>Xem ngày sinh khác</button>
        </div>
    </div>
  );
};
