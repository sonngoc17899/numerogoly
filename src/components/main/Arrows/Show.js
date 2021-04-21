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
    <div className="date">
      <i>Các mũi tên mà bản sở hữu dựa vào biểu đồ ngày sinh</i>
    </div>
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
              <div className="title">
                MŨI TÊN 3-6-9: MŨI TÊN TRÍ TUỆ
              </div>
              <div className="text">
                <p>
                  Đây là một mũi tên đặc sắc, tương tự như những mũi tên thế mạnh khác, số lượng người có Mũi tên trí tuệ rất hiếm. Nếu bạn có đủ ba con số 3, 6, 9 này trong ngày sinh, xin chúc mừng bạn! Bạn thuộc nhóm số ít những người có Mũi tên Trí tuệ - mũi tên cho thấy người sở hữu nó có nhiều lợi thế về các hoạt động tư duy, mà một trong số đó là trí nhớ vượt trội lại mang đến rất nhiều ưu điểm khác, chẳng hạn như học lực khá giỏi, khả năng ghi nhớ dài hạn và chi tiết.
                </p>
                <p>
                  Tren thực tế, sự có mặt của cả ba con số 3, 6, 9 trên trục ngang Trí não đã chỉ ra tầm quan trọng của trí thông minh và cách người có mũi tên này chọn thể hiện bản thân mình. Nó cho thấy một bộ não cực kỳ năng động, thứ tạo ra điều kiện thuận lợi cho sự vượt trội của trí nhớ. Tuy nhiên, một số người sở hữu mũi tên này nhưng vẫn có trí nhớ kém dưới mức trung bình. Điều này cho thấy họ đang lãng phí tài năng và trở nên lười tư duy. Nếu điều này không được phát hiện và điều chỉnh kịp thời, ưu thế bẩm sinh của họ sẽ bị mai một vì không được sử dụng thường xuyên, và cuối cùng, người này sẽ chịu cảnh cô độc bời khó ai có thể chịu nổi tỉnh gắt gỏng của họ - mặt trái của một trí tuệ không được mài rũa.
                </p>
                <p>
                  Nhìn chung, người có mũi tên này thường sáng dạ, sống khá tích cực và nhanh nhạy, thích những gì mang tính học thuật hơn hơn tính thẩm mỹ. Họ thường đắm chìm trong suy nghĩ hơn là ngụp lặn giữa các cảm giác, mặc dù đôi khi học cũng khá đa sầu đa cảm mà không nhận ra. Những người có mũi tên vàng này cần có ý thức tránh thái độ trịch thượng, chỉ tìm những ai mà họ cho rằng có trí tuệ ngang họ trở lên để chơi. Hãy phát triển lòng bao dung và tình yêu thương hạn chế xu hướng tỏ thái độ khó chịu với những người kém may mắn hơn mình về mặt trí tuệ. Chúng ta có thể khắc phục mọi điểm yếu của mình, miễn là chúng ta biết phát huy năng lực bẩm sinh.
                </p>
                <p>
                  Những người này thường phải gánh vác không ít trách nhiệm, họ cũng gặp không ít nghịch cảnh hay trướng ngại, nhưng họ thường giải quyết hoặc vượt qua các vấn đề này một cách tốt đẹp. Họ cũng là người quảng giao, có thể dễ dàng tìm ra các lời lý giải hợp tình hợp lý cho hầu hết mọi tình huống, nhưng hãy cẩn thận, bộ não tốt cỡ nào cũng cần được nghỉ ngơi. Nếu bộ não của họ không được nghỉ ngơi đầy đủ, những người này thường cáu bẩn mà không có lý do rõ ràng. "Triệu chứng" này chính là lời cảnh báo họ phải nghiêm túc học cách cân bằng đời sống của mình giữa các khía cạnh tư duy, thể chất và nghệ thuật để đạt được thành công cao nhất.
                </p>
                <p>
                  Những người có mũi tên Trí tuệ không có trực giác tốt nếu trong ngày tháng năm sinh của họ không có số 2 - con số chỉ trực giác, nằm ở Trục ngang Tinh thần. Lý do rất đơn giản, trực giác thuộc Tinh thần, không phải Trí não. Do đó, đôi khi những người rất thông minh, sáng trí này cũng bị ... tắc nghẹn. Hãy nhớ "bật công tắc" trực giác lên, cho dù bạn có Mũi tên Trí tuệ.
                </p>
                <p>
                  Trẻ con có Mũi tên Trí tuệ 3-6-9 thường nằm trong nhóm học sinh đứng đầu lớp, thậm chí là toàn trường, đặc biệt ở các môn tự nhiên như Toán hoặc các môn cần có khẳ năng phân tích. Các em nên được xếp vào các lớp năng khiếu để được bồi dưỡng kiến thức chuyên sâu, bao gồm những dự án phát triển trí não như các bộ môn nghiên cứu, tìm hiểu về thiên văn học... Trẻ nhóm này thường năng động và "cứng đầu", đặc biệt là khi chúng cảm thấy những gì chúng đang học chưa đủ tính thách thức. Trẻ thường cảm thấy vui khi những người xung quanh cần đến sự giúp đỡ của mình và sẽ rất nhiệt tình hợp tác. Trẻ cũng rất thích được khen ngợi về những nỗ lực của mình.
                </p>
                <p>
                  Đối với trẻ thuộc nhóm này, cha mẹ hoặc thầy cô cần lưu ý không đưa vào thực đơn của trẻ các loại thức ăn giàu chất kích thích hay hóa chất nhân tạo. Khi tới tuổi thiếu niên trẻ thường dễ phấn khích, dễ bị kích động và tăng động nếu ăn đồ ăn linh tinh.
                </p>
                <p>
                  Một vấn đề nữa mà phụ huynh cần lưu ý là trẻ nhóm này có bộ não "chạy" nhanh hơn miệng, nên một số em thường dễ mắc chứng cà lăm (nói lắp), một tật cần được điều chỉnh càng sớm càng tốt. Làm thế nào để khắc phục? Hãy yêu cầu trẻ thư giãn nhiều hơn một chút, chơi nhiều môn thể thao hoặc dành nhiều thời gian hơn cho thể thao, hòa nhập với thiên nhiên càng nhiều càng tốt và "thoát ra khỏi các hoạt động trí não" nhiều một chút - như vậy sẽ tốt hơn cho trẻ.
                </p>
                <p>Hãy luôn nhớ rằng trẻ có mũi tên trí tuệ gặp gì cũng phân tích, đánh giá, đo lường. Chúng có thể dễ dàng phát hiện người khác không thành thật, cởi mở với chúng, hoặc họ đang muốn lừa dối chúng một cách trắng trợn. Chúng sẽ phản ứng bằng cách rút lại toàn bộ niềm tin của mình đối với những người này. Nếu sự lừa dối cứ lặp lại nhiều lần, những đứa trẻ này sẽ trở nên vô cùng tức giận.</p>
                <p>Vì vậy, việc có một đứa con có mũi tên Trí tuệ vừa là niềm vui, niềm hãnh diện, vừa là một nỗi lo lắng, vừa là nỗi lo lắng của các bậc phụ huynh và thầy cô vì không biết chăm sóc sao cho đúng mực để phát huy tối đa năng lực trí tuệ của con. Hãy lắng nghe trái tim mình, bạn sẽ biết bạn nên làm gì và cần làm gì để cho con bạn một tương lai tốt đẹp nhất</p>
              </div>
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
            {props.arrow123 !== ""?
            <div>
              <div className="title">
                MŨI TÊN 1-2-3: MŨI TÊN KẾ HOẠCH
                </div>
                <div className="text">
                  <p>
                    Người có Mũi tên Kế hoạch rất thích trật tự đâu ra đó, có phương pháp thực hiện, có thấu hiểu vấn đề. Nhưng họ thường đặt vị trí của mình vào vị trí "người tổ chức" hơn là "người thực hiện" các chi tiết, trừ khi họ có thêm Mũi tên Thực tế (1-4-7), hoặc có Con số chủ đạo thuộc nhóm thể chất (4, 7, 10 hay 22/4).
                  </p>
                  <p>
                    Với khả năng hoạch định xuất sắc như vậy, người có mũi tên này cần lưu ý tránh "nổi máu lười". Nghe có vẻ phi lý nhưng thực tế là vậy, đặc biệt khi họ liên tục giao kế hoạch cho người khác thực hiện mà không chú ý theo dõi, giám sát tiến độ thực hiện. Họ cũng cần lưu tâm hơn vào các chi tiết nhỏ và đừng phó mặc với suy nghĩ "tiểu tiết không quan trọng".
                  </p>
                  <p>
                    Trẻ con có Mũi tên Kế hoạch sẽ vui nhất khi được tự tay thiết kế, tổ chức những kế hoạch nho nhỏ cho bạn bè hay gia đình. Nhưng nếu các kế hoạch này gặp trở ngại hoặc xung đột với kế hoạch khác từ cha mẹ, trẻ có thể thất vọng. Chỉ khi nào cha mẹ thật kiên nhẫn và bày tỏ tình yêu thương thật nhẹ nhàng thì chúng mới "bỏ qua" nỗi thất vọng này.
                  </p>
                  <p>
                    Những đứa trẻ thuộc nhóm này thường tỏ ra khá tách biệt, coi điều đang diễn ra là lẽ đương nhiên và thường chìm đắm trong những suy nghĩ hoặc kế hoạch riêng của chúng. Sự tách biệt này thể hiện ra ngoài thành vẻ xa cách, từ từ trở thành thói quen phớt lờ, không lưu tâm đến nhu cầu của người khác. Các bậc phụ huynh và thầy cô cần áp dụng kỷ luật yêu thương nhưng nghiêm khắc, cứng rắn để trẻ hợp tác. Những đứa trẻ này cũng cần tránh bị bắt nạt hoặc dù dọa, mà thay vào đó, chúng cần được dạy dỗ nhẹ nhàng để biết tôn trọng các ý kiến, thói quen hay đồ vật thuộc sở hữu của người khác.
                  </p>
                  <p>
                    Trẻ có Mũi tên 1-2-3 thường nhẹ nhàng, đáng tin cậy và chậm nhận ra sự bất công. Sự ngây thơ này có thể rất dễ thương, mặc dù đôi khi chính sự cả tin này khiến trẻ bị tổn thương khi chúng nhận ra những người xung quanh không dễ tin và dễ bị lừa như mình.
                  </p>
                  <p>
                    Trong những năm đầu đời, trẻ có Mũi tên 1-2-3 thỉnh thoảng gặp phải cảm giác bồn chồn, lo lắng, vì dành quá nhiều thời gian trong tâm trí mà không biết cách thể hiện năng lượng trí não này thực tế. Lúc này, cha mẹ hoặc người lớn xung quanh có thể giúp trẻ bằng cách khuyến khích trẻ năng động hơn, thường xuyên vận động ngoài trời, hòa mình vào thiên nhiên. Cho trẻ đọc sách du ký có tranh minh họa cũng rất hữu ích cho đến khi chúng đủ lớn để có điều kiện tự trải nghiệm du lịch, giúp chúng thỏa mãn sự ham học hỏi và khám phá những điều chưa biết.
                  </p>
                  </div>              
            </div>
            :""}
        </div>
        <div className="arrow">
            {props.arrow456 !== "" ?
            <div>
              <div className="title">
              MŨI TÊN 4-5-6: MŨI TÊN Ý CHÍ
              </div>
              <div className="text">
                <p>
                  Mũi tên Ý chí - mũi tên kết nối cả ba con số 4-5-6 của trục dọc ở giữa - là mũi tên rất ít người có.
                </p>
                <p>
                  Khi số 6 - đại diện cho sự sáng tạo - được gắn liền với sự tự do thể hiện của số 5, rồi kết nối với số 4 của óc tổ chức thực tiễn, chúng ta có sự cân bằng đầy sức mạnh của cả ba con số trung tâm của cả ba trục: Thể chất - Trí não - Tinh thần. Đây chính là Mũi tên Ý chí. Nó đại diện cho cuộc sống của con người và nguồn lực sự sống tuôn chảy trong đó.
                </p>
                <p>
                  Sức mạnh đặc biệt của Mũi tên Ý chí nằm ở sự kết hợp và cân bằng của ba ưu điểm ở mỗi Trục (Thể chất - Trí não - Tinh thần). Khi người ta nhận ra sức mạnh của sự cân bằng đó và biết áp dụng vào công việc hằng ngày, cuộc sống của họ sẽ thay đổi, và họ sẽ đạt được thành công cao nhất. Họ đủ kiên cường và can đảm để phá bỏ mọi trở ngại khi hành động với sự khôn ngoan và thông thái. Hai nhân vật đại diện cho những người thành công đặc biệt với mũi tên này là đại văn hào người Anh William Shakespeare, và họa sĩ tài danh Leonardo da Vinci.
                </p>
                <p>
                  Trẻ con có Mũi tên Ý chí có thể làm cha mẹ và thầy cô bận rộn. Trẻ có ý chí vô cùng mạnh mẽ, nhưng cần được dạy dỗ để có thể hiểu quan điểm của người khác và tiếp nhận sự hướng dẫn hợp lý. Một trong những điều mà nhóm trẻ này thích nhất chính là được làm những việc tử tế, nhưng chúng cần được chỉ dạy để biết rằng không nên có suy nghĩ tư lợi khi thực hiện những việc này, vì như vậy sẽ làm giảm bớt giá trị cao đẹp của chúng đang làm.
                </p>
                <p>
                  Trẻ cũng sẽ trở nên đặc biệt cứng đầu và cực kỳ khó chịu nếu không được dạy dỗ một cách nhẹ nhàng, yêu thương và kiên nhẫn. Chúng thích được khen khi làm tốt, nhưng sẽ lập tức nghi ngờ nếu được tặng những món vật chất như bánh kẹo hay tiền... Nếu trẻ chấp nhận những món quà này, chúng có thể phát triển tính ham mê vật chất, trở thành người sống vì vật chất khi trưởng thành.
                </p>
              </div>
            </div>
          :""} 
        </div>
        <div className="arrow">
            {props.arrow789 !== ""?
            <div>
              <div className="title">
                MŨI TÊN 7-8-9: MŨI TÊN HOẠT ĐỘNG
              </div>
              <div className="text">
                <p>
                Mũi tên này nằm ở trục dọc ngoài cùng bên phải, kết nối số 7 - con số của trải nghiệm, với số 8 - con số của trí tuệ và khả năng cảm thụ, và số 9 - con số của hoài bão và trách nhiệm. Sức mạnh của sự kết hợp này đôi khi bị quá đà, trở thành quá mức "năng động".
                </p>
                <p>
                  Con người là những sinh vật giàu biểu cảm nhất, vượ xa bất kỳ giống loài nào khác. Những biểu cảm này còn đặc biệt đa dạng và dễ nhìn thấy ở những người có Mũi tên 7-8-9. Tuy nhiên, xã hội hiện đại với nhiều quy tắc đã ít nhiều cản trở họ, đến mức khiến họ dễ kích động bởi năng lượng bức bối ngày càng leo thang. Người có mũi tên này dễ bị chứng hồi hộp thái quá, dẫn đến nhiều bệnh lý như hen suyễn, chứng ăn khó tiêu, nhức đầu hay đau nửa đầu, hoặc các vấn đề về tim mạch hay hệ thống tuần hoàn máu,
                </p>
                <p>
                  Người có Mũi tên hoạt động rất cần sự bình an và hòa hợp với môi trường xung quanh. Các cuộc cãi vã, những chương trình truyền hình hoặc phát thanh quá ồn ào sẽ khiến họ cực kỳ căng thẳng. Họ càng dành thời gian nhiều thời gian với thiên nhiên càng tốt, vì họ không phải là những người phù hợp với không khí của các thành phố lớn. Những hoạt động lý tưởng đối với họ là đi dạo trong công viên, làm vườn, trồng trọt hoặc tham gia các hoạt động thể thao ngoài trời. Nếu không được tận hưởng những không gian tự do như vậy, họ sẽ dễ gặp các vấn đề về hệ tiêu hóa. Thêm nữa, chế độ ăn uống lành mạnh, cuộc sống hòa mình với thiên nhiên, cùng với cái nhìn tích cực về cuộc sống và những người bạn vui vẻ sẽ có hiệu quả trong việc giúp những người có Mũi tên 7-8-9 khỏe mạnh hơn bất kỳ loại thuốc nào.
                </p>
                <p>
                  Trẻ em có mũi tên này đặc biệt ghét mọi loại tiếng ồn, đòi hỏi sự bình yêu thương và hài hòa ở mọi việc chúng làm, mọi nơi chúng đi. Chúng dễ bị kích động và ám ảnh nên rất cần sự tự do trải nghiệm ngoài thiên nhiên, càng nhiều càng tốt. Chúng sẽ vui sướng nhất nếu được phép ăn, ngủ và chơi đùa ngoài thiên nhiên, vì những lúc đó, những cảm xúc của chúng được dịp thả lỏng. Những đứa trẻ này cũng cần ngủ rất nhiều, và một mái ấm không có căng thẳng hay cãi vã. Rất nhiều người lớn sống trong cảnh không an vui hiện giờ vì tuổi thơ của họ kém bình yên - và chúng ta cần rút kinh nghiệm về điều này, để thế hệ con cháu chúng ta không giẫm vào vết xe đổ.
                </p>
                <p>
                  Sự ồn ào, căng thẳng hay nỗi bất an có thể ảnh hưởng rất nhiều đến chất lượng học tập của trẻ tại trường. Các bậc phụ huynh không nên cho trẻ tiếp xúc tiếng ồn ào, bao gồm các chương trình quá mức kích động trên ti-vi, radio hay các sự kiện trực tiếp diễn ra. Đặc biệt với những trẻ có Mũi tên uất giận (mũi tên trống 4-5-6) nên cha mẹ cần thận trọng.
                </p>
              </div>
            </div>
          :""}
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
              Những người có Mũi tên trống 3-5-7 thoạt có vẻ… khá đa nghi, thường hay đặt câu hỏi “Tại sao” cho hầu như mọi vấn đề của cuộc sống. Điều này làm cho cuộc sống của họ… khá mệt, thậm chí có vẻ hơi tiêu cực đầu tiên. Tuy nhiên, sau khi đã cất công tìm hiểu cho tới tận cùng căn nguyên vấn đề, điều gì làm cho họ tin được, họ sẽ chấp nhận một cách rõ ràng, bằng ngược lại, cái gì họ đã không đồng tình với quan niệm đó, họ dẹp luôn.
              </p>
              <p>
 Bản chất của những người thuộc nhóm này là có máu tìm hiểu, lục lọi, nên có rất nhiều nhà nghiên cứu khoa học có Mũi tên đặc thù này. Nhìn chung, những người này sẽ bắt đầu nghiền ngẫm, tìm tòi trên cái nền căn cơ những điều, hoặc có nhìn ra, cũng đặt vào vị trí thứ yếu.
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
            {props.emtyArrow369 !=="" 
            ? <div>
              <div className="title">
                MŨI TÊN TRỐNG 3-6-9: MŨI TÊN TRÍ NHỚ NGẮN HẠN
              </div>
              <div className="text">
                <p>
                  Sự vắng mặt các con số 3, 6 và 9 ở Trục ngang Trí não cho thấy một trí nhớ kém, nhưng điều này không có nghiwax là người mất trí hay không thể suy nghĩ. Chính xác hơn, người có Mũi tên trí nhớ ngắn hạn này là những người phải cố gắng nhiều để đảm bảo trí nhớ của họ luôn trong trạng thái năng động và nhanh nhạy, và họ cần ý thức giữ nỗ lực này suốt đời. Chỉ cần họ ỷ lại hay trở nên lười suy nghĩ dù chỉ trong một quãng thời gian ngắn, trí nhớ của họ, cùng với sự sáng tao và các lý tướng sống, sẽ nhanh chóng bị mai môt. Điều này đnág lo là trong nửa quãng thời gian đầu tiên của cuộc đời, những người này vẫn bình thường thậm chí học giỏi, tuy nhiên, từ nửa quãng đời sau, chứng suy giảm trí nhớ bắt đầu có nhiều ảnh hưởng tương đối nặng nề đến cuộc sống của họ. Điều này diễn ra từ từ, phát triển thành các triệu chứng "tính khí con nít", tức là chứng nhanh chóng trở nên trầm trọng hơn, thành chứng mất trí nhớ Alzheimer ở người lớn tuổi.
                </p>
                <p>
                  Trẻ em có Mũi tên trống 3-6-9 càn nhận được sự đào tạo tương đối đặc biệt và cần nhiều sự kiên nhẫn trong những năm tháng đầu đời. Các em sẽ có vẻ hơi chậm về mặt suy nghĩ, cần được dạy cách tăng cường khả năng tập trung, thứ quan trọng để phát triển trí nhớ. Tiếp theo, các em có thể được khuyến khích khả năng sáng tạo và tăng cường ý thức về thế giới tự nhiên xung quanh các em - những điều này mang ý nghũa của số 6 và sẽ giúp các em rất nhiều.
                </p>
                <p>
                  Trẻ em thuộc nhóm này được khuyên không nên đi học quá sớm. Và khi các em đi học, phụ huynh và thầy cô đừng đặt nặng chuyện kiến thức hay thành tích, mà hãy tập trng phát triển cho trẻ ý thức kỷ luật, kế đó là các hình thức sáng tạo hay nghệ thuật đa dạng. Đến bảy tuổi, trẻ có thể bắt đầu học kiến thức phổ thông. Nếu bị đưa vào hệ thống giáo dục như bình thường, rất có thể sẽ bị các chứng nhức đầu, trường hợp nặng có thể dẫn đến chứng đau nửa đầu. Những đứa trẻ có mũi tên trống này thường thích thiên hơn khoa học, nên cha mẹ và thầy cô cần nhẹ nhàng dạy các con một cách cẩn trọng và kiên nhẫn, từ từ trẻ sẽ có thể tiến bộ lên rất nhiều.
                </p>
              </div>
            </div>
           :"" }
        </div>
        <div className="arrow">
            {props.emtyArrow258 !== "" ?
            <div>
              <div className="title">
                MŨI TÊN TRỐNG 2-5-8: MŨI TÊN NHẠY CẢM
              </div>
              <div className="text">
                <p>
                  Vì  nằm ở trục ngang Tinh thần nên mũi tên trống này cũng cho thấy một sự thiếu hụt mang tính chất tinh thần. Việc thiếu hụt những con số trong trục này không có nghĩa là người này không có đời sống nội tâm, mà thực chất, nó diễn tả sự bảo vệ phần tâm hồn của người này không đủ mạnh. Do đó, sự nhạy cảm của họ lộ ra, tiếp xúc với thế giới bên ngoài - vốn hiền có dữ và có xu hướng lợi dụng sự yếu ớt của những tâm hồn quá nhạy cảm.
                </p>
                <p>
                  Vì vậy, Mũi tên trống 2-5-8 thể hiện sự nhạy cảm, dễ tổn thương, đặc biệt trong giai đoạn đầu đời, khi người ta bộc lộ toàn bộ sự nhạy cảm này mà chưa biết dựng lên lớp tường rào bảo vệ cảm xúc của mình. Họ dễ cảm thấy bị xúc phạm, dễ xuống tình thần, do đó thường rụt vào bên trong và trở nên bẽn lẽn, nhút nhát. Nhiều người thuộc nhóm này dễ rơi vào cảm giác tự ti từ rất sớm, khiến họ gặp phải một số khó khăn khi giao tiếp xã hội và dễ mất lòng tin nơi người khác. Khi đến tuổi trưởng thành, một vài người trong số họ vượt qua những cảm xúc phức tạp này bằng cách kiểm soát tốt cảm xúc. Những người này thậm chí còn thành danh trong một số lĩnh vực mà họ dốc sức vào, hoặc nắm thế chủ động trong các tình huống hay các trao đổi để bảo vệ bản chất nhạy cảm tự nhiên của mình. Một số người khác học được cách chủ động tấn công người khác và coi đây như mọt cách tự vệ. Đặc điểm này dễ xảy ra ở nhưng người thiếu chuỗi số 2-5-8 nhưng lại có Mũi tên Trí tuệ (3-6-9), hoặc có Con số chủ đạo nằm ở Trục ngang Trí não (số 3, 6, 9).
                </p>
                <p>
                  Sự nhạy cảm tự nhiên đã cho họ bản tính giàu tình yêu thương và dịu dàng, nhưng họ thường có phản ứng thụ động vì những tổn thương về cảm xúc, khiến họ tự xây dựng cho mình một vẻ ngoài cứng rắn, thứ mâu thuẫn với biểu cảm nhẹ nhàng, tự nhiên ở họ. Họ học cách bày tỏ cảm xúc tùy vào đối tượng mà mình tương tác - một kiểu phân biệt đối xử. Điều này khiến nhiều người sở hữu mũi tên trống này gặp trắc trở trong đời sống tình cảm, vì họ vô tình thể hiện không đúng bản chất con người mình, từ đó khiến người thương hiểu lầm.
                </p>
                <p>
                  Đôi khi những người có Mũi tên trống 2-5-8 có vẻ rất bướng bỉnh, thậm chí là "nghênh ngang", nhưng đây chỉ là những lớp vỏ bọ họ dựng lên để che đậy sự bẽn lẽn nhút nhát cố hữu của mình mà thôi. Họ luôn dễ bị tổn thương về mặt cảm xúc, một điều mà rất hiếm người có mũi tên này hoàn toàn hiểu được hay vượt qua được. Một trong những bài học quan trọng nhất mà những người này cần lĩnh hội chính là học cách kiểm soát cảm xúc, càng sớm càng tốt.
                </p>
                <p>
                  Như ở trên đã đề cập, đối với một tác nhân kích động, chúng ta có hai khuynh hướng phản ứng: phản ứng thụ động và phản ứng chủ động. Những người có Mũi tên Nhạy cảm cần phân biệt được hai cách phản ứng này để không còn xem mình là nạn nhân của hoàn cảnh hoặc thụ đông phản ứng với ý kiến của người khác. Họ cần học cách làm những người tiên phong, người truyền cảm hứng và thực hiện những mục tiêu đáng giá. Thông qua các nỗ lực đó, họ sẽ nhận ra sức mạnh riêng của mình, xóa đi sự mặc cảm tự ti, và chính sức mạnh này sẽ giúp họ cân bằng lại các đặc điểm của mình, đạt được một số thành quả trong cuộc sống. Điều này rất quan trọng, vì từ nền tảng đó, họ sẽ từ từ đi lên, đạt được thêm nhiều thành tựu mới, nhiều quả ngọt mới. Kết quả, sự hiểu biết của họ cũng sẽ gia tăng, lòng tin vào cuộc sống, vào con người của họ cũng được phục hồi.
                </p>
                <p>
                  Trẻ em có Mũi tên trống 2-5-8 thường đặc biệt nhút nhát, nhạy cảm. Một số em khi đi ra ngoài đường, giữa đám đông, thường cúi gằm đầu xuống để giấu đi sự tự ti của mình. Tuy nhiên, bằng sự kiên nhẫn, tình yêu thương và sự tử tế, cha mẹ, thầy cô và những người lớn xung quanh có thể dễ dàng giúp trẻ vượt qua điểm hạn chế này. Các bậc phụ huynh nên dành nhiều thời gian trò chuyện, lắng nghe và chia sẻ với con, vì những nỗi sợ hãi, lo lắng bồn chồn thường rất thật trong đầu óc on nớt của trẻ. Cha mẹ cũng cần khuyến khích con diễn đạt thành lời những vấn đề con đang cảm thấy, vì điều này sẽ giúp trẻ cân bằng cảm xúc và cảm giác an toàn khi dám biểu lộ sự nhảy cảm của bản thân.
                </p>
                <p>
                  Trẻ có mũi tên trống 2-5-8 khao khát tình yêu thương nhiều hơn những đứa trẻ bình thường khác. Chúng tìm kiếm mọi cơ hội để được gần gũi những người mà chúng yêu thương và cũng yêu thương chúng. Vì thế, cha mẹ nên tạo điều kiện cho con tham giai các hoạt động thú vị, bổ ích. Đồng thời, đừng quên khen ngợi hay cổ vũ con khi con làm tốt, vì đó chính là thứ mà chúng rất cần. Ngược lại, nếu trẻ lỡ có làm việc gì đó không đạt hay tỏ ra có phần nghịch ngợm, đừng rầy la hay chỉ trích con trước mặt người khác, đặc biệt là trước mặt các bạn đồng trang lứa. Vì hành động đó chẳng khác nào "đóng mộc" sự mặc cảm tự ti cho con, đồng thời cũng làm mất đi lòng tự tin hay kính trọng của con. Thay vào đó, cha mẹ và thầy cô nên trao đổi tiêng với trẻ, giúp trẻ tìm ra cách thức tốt đẹp nhất để giải quyết vấn đề.
                </p>
              </div>
            </div>
            :""}
        </div>
        <div className="arrow">
            {props.emtyArrow147 !== "" ? 
            <div>
              <div className="title">
                MŨI TÊN TRỐNG 1-4-7: MŨI TÊN THIẾU TRẬT TỰ
              </div>
              <div className="text">
                <p>
                  Khi ngày tháng năm sinh của bạn hoàn toàn không có các số 1, 4 và 7, bạn đã nằm trong nhóm những người có mũi tên trống khá đặc biệt, đó là Mũi tên Thiếu trật tự.
                </p>
                <p>
                  Những người có mũi tên trống 1-4-7 cần có trải nghiệm thực tế và tính kiên nhẫn thì mới phát triển được sự cân bằng ở ba trục thể chất - Trí não - Tinh thần, nếu không họ sẽ sống trong sự hỗn loạn, thiếu trật tự ở nhiều mặt. Khi vận dụng được sự nhạy cảm của mình trong thực tế, họ sẽ cảm nhận được niềm vui khi nhận thấy thành quả lao động của mình như được "cởi trói" để có cơ hội phát triển. Nếu không làm được điều này, họ có khả năng trở thành người trì trệ, không thiết tha làm việc để nuôi sống bản thân. Nhiều trường hợp không được can thiệp để uốn nắn từ nhỏ thì đến lớn sẽ khó mà sửa được và có thể phải sống nhờ vào sự giúp đỡ của người khác.
                </p>
                <p>Trẻ con có Mũi tên trống 1-4-7 cần được dạy để trở nên thực tế và ngăn nắp càng sớm càng tốt, ngay từ khi trẻ vừa biết đi chập chững. Trẻ nên được khuyến khích tập trung làm cho xong mỗi lần một việc rồi mới tiếp tục làm qua việc khác, không thì sẽ chẳng có việc nào được hoàn thành cả. Trẻ cần sự chú ý đáng kể từ cha mẹ hay người lớn xung quanh, những người phải chịu khó bày ra các trờ chơi mang tính thực tiễn với chúng (những trờ có liên quan đến cầm, nắm, đếm, tính toán hay trải nghiệm thực tế, có dọn dẹp sau khi chơi xong). Trẻ cũng cần được giao cho các công việc nho nhỏ trong nhà, như dọn dẹp góc phòng, sân nhà,... mỗi khi có thể. Mỗi lần trẻ hoàn thành những nhiệm vụ này, ngoài lời động viên và khen ngợi, cha mẹ nên chuẩn bị những phần thưởng be bé cho trẻ. Đối với nhóm trẻ này, bên cạnh giá trị động viên thông thường, những phần quà còn được xem là "bằng chứng thực tế" giúp trẻ hiểu sự cân bằng giữa giá trị vật chất và giá trị tinh thần. Ngay khi đủ tuổi đến trường, trẻ cũng nên được khuyến khích tham gia các hoạt động thể thao không mang tính thi đua, tranh đấu hoặc đối kháng.</p>
              </div>
            </div>
          :""}
        </div>
        <div className="arrow">
            {props.emtyArrow456 !==""?
            <div>
              <div className="title">
                MŨI TÊN TRỐNG 4-5-6: MŨI TÊN UẤT GIẬN
              </div>
              <div className="text">
                <p>
                  Nếu như Mũi tên Ý chí 4-5-6 khá hiếm, thì ngược lại, số người có Mũi tên trống 4-5-6 trong Biểu đồ ngày sinh lại khá nhiều, tạo thành một xã hội trong đó người hài lòng thì ít, kẻ uất giận thì nhiều.
                </p>
                <p>
                  Với sự vắng mặt của cả ba con số 4, 5 và 6, mũi tên này tạo thành một Biểu đồ ngày sinh bị chia thành hai nửa và một ý chí khá yếu ớt cho những ai sở hữu nó. Nhiều trường hợp có mũi tên này họ thường phải gánh chịu khá nhiều vấn đề lớn trong cuộc sống, chẳng hạn như gia đình tan vỡ, các mối quan hệ tình cảm không vui vẻ, hay bị trầm cảm.
                </p>
                <p>
                  Sự "uất giận" này đến từ những kỳ vọng không được thỏa mãn. Người có mũi tên này thường kỳ vọng người khác nhiều hơn những gì bản thân họ sẵn sàng cho đi. Nhưng nêu shoj có thể học cách chấp nhận người khác vì sự độc đáo riêng của mỗi người, thì họ sẽ không cần đặt kỳ vọng sai chỗ nữa. Và cũng từ đó, thói "kỳ vọng, mong cầu" sẽ phai nhạt bớt, họ sẽ sống an nhiên và hạnh phúc hơn.
                </p>
                <p>
                  Như vậy bài học dành cho những người có Mũi tên trống 4-5-6 là hiểu "kỳ vọng" theo hướng "Có thì tốt, không có cũng không sao" , nghĩa là "Tận nhân lực, tri thiên mệnh". Khi đó họ vẫn nỗ lực nhưng sẽ không đến nối héo hon trong sự thất vọng vì kết quả như mong đợi.
                </p>
                <p>
                  Những người có mũi tên này cần biết rằng không ai là hoàn hảo, bởi nếu đã hoàn hảo thì chúng ta đâucần trở lại kiếp sống này để có cơ hội học hỏi và hoàn thiện mình. Mỗi người đều đang ở những giai đonạ tiến hóa riêng - có những người là "linh hồn già" hơn thì mức độ hiểu biết, chín chắc và lòng trác ẩn của họ sẽ dày và sâu hơn hững người "linh hồn trẻ" - nên hãy để cho mỗi linh hồn được phát triển tùy duyên, không nên gượng ép. Đối với con người, lòng biết ơn chính là "chất kích thích tăng trưởng" hiệu quả nhất, nhưng linfg biết ơn phải chân thành thì mới có thể phát huy tác dụng lâu dài.
                </p>
                <p>
                  Và bạn thấy đó, trong cuộc sống, có biết bao cách thức khác nhau để con người lĩnh ngộ các bài học của cuộc đời. Những người có mũi tên trống 4-5-6 nên ý thức rằng những thất vọng, tổn thất, chia rẽ và cả sự vỡ mộng trong cuộc đời chính là những bước đi cần thiết của linh hồn chúng ta. Nếu họ nhận ra điều này, những buồn thương sẽ dần biến mất. Ngược lại, họ sẽ chìm trong nỗi buồn, sự cô độc hay cảm giác bị từ chối, bị lạc lõng. Tập cảm thông với người khác, xây dựng lòng trác ẩn sẽ giúp các vấn đề của họ giảm đi.
                </p>
                <p>
                  Trẻ con có mũi tên trống này rất cần sự quan tâm và yêu thương đặc biệt. Chúng có thể bị đẩy vào các hoàn cảnh mà trong đó, chúng trở thành nạn nhân của các trờ bấy công hay ác ý của bạn bè, và thậm chí là của những người quen biết khiến chúng thất vọng. Quá trình này lặp đi lặp lại sẽ khiến trẻ có tâm trạng thất thường, từ đó càng thêm bối rối và vui buồn bất chợt.
                  <p>
                    Cha mẹ của những đứa trẻ thuộc nhóm này cần dạy trẻ tôn trọng người khác, để mỗi người được thể hiện đúng bản tính và biết rằng không phải lúc nào người khác cũng làm theo ý của trẻ. Bằng cách này, chúng sẽ học được khái niệm "Con thích" thay cho "Con muốn", để kết quả tâm trạng của chúng không bị cột chặt vào một kết quả nhất định. Một điều đặc biệt quan trọng nữa là cha mẹ cần tạo ra một mối quan hệ thân thiết với con. Đây không đơn giản chỉ là chuyện tôn trọng hay ngoan ngoãn nghe lời, đó còn là sự tin yêu đối với cha mẹ. Một "tình bạn" đặc biệt như vậy sẽ làm dịu tâm trạng thất thường ở trẻ, nhất là khi trẻ có thể chia sẻ mọi điều với cha mẹ mà không bị đánh gia hay phải giải thích cho hành động của mình.
                  </p>
                </p>
              </div>
            </div>
            :""}
        </div>
        <div className="arrow">
            {props.emtyArrow789 !=="" ?
            <div>
              <div className="title">
                MŨI TÊN TRỐNG 7-8-9: MŨI TÊN THỤ ĐỘNG
              </div>
              <div className="text">
                <p>
                  Thoạt nhìn, chúng ta sẽ thấy người sở hữu mũi tên này không có sự trải nghiệm để trưởng thành của số 7, không có trí tuệ và khả năng cảm thụ của số 8, và cũng không có hoài bão và trách nhiệm của số 9 - hẳn là người này sẽ rất thú động, không tự tạo động lực để tiến lên phía trước được. Nhưng hãy nhớ rằng tất cả những người này đều được trang bị một sức mạnh bẩm sinh mà không phải ai trong thiên niên kỷ trước cũng có, đó chính là số 2, con số của trực giác, của sự kết nối với vũ trụ bao la. Và khi họ có rất nhiều số 0 trong Biểu đồ ngày sinh, đặc biệt là khi trống cả dãy 7-8-9, họ sẽ có cơ hội để trở thành Vô cùng.
                </p>
                <p>
                  Những người có Mũi tên trống 7-8-9 sẽ có nhiều khả năng trở thành những người tư duy, lên kế hoạch và dẫn dắt sau hậu trường cho cả kỷ nguyên mới, khi rất nhiều người có mũi tên trống này lại có Mũi tên Kế hoạch (1-2-3). Tuy vậy, những người này sẽ không thể chạm đích thành công nếu không được rèn luyện về sự kiên trì và tinh thần kỷ luậ thông qua những "chương trình đào tạo" ở cả trường học lẫn trường đời.
                </p>
                <p>
                  Sự thụ động của mũi tên này không đối nghịch với sự năng động theo mô tả phổ biến, mà đúng hơn, nó khát vọng sâu xa và tự nhiên về cuộc sống cân bằng, nó là kháy vọng sâu xa và tự nhiên về một cuộc sống cân bằng, an hòa, nơi mọi người, mọi loài "sống chan hòa bên nhau - không ganh ghét oán thù - không chiến tranh giết chóc". Đây chính là bức tranh đẹp đẽ mà nhân loại ở thế kỷ 21 vươn đến.
                </p>
                <p>
                  Tuy nhiên, điểm hạn chế lớn nhất của những người có mũi tên này là họ thường không tự thức dậy được, mà cần sự tác động từ bên ngoài - chẳng hạn như một bài học, một con người, một trường năng lượng nào đó đánh thức Trực giác và Tiềm thức đang ngủ say của họ. Và quan trọng nhất, họ luôn cần có sự quan tâm, khuyến khích, thúc đẩy sự thức tỉnh này, vì họ thường có vẻ lừ đừ, lười vận động. Họ sẽ không nhận ra mục đích của họ khi đến với cuộc sống này, và do đó luôn cần được hướng dẫn, bảo ban và rèn luyện để trở nên năng động hơn trong cuộc sống thường ngày. Nếu được nhắc nhở về sự thức tỉnh và lan tỏa ngày ngay từ thuở nhỏ, họ sẽ có khả năng đạt được thành tựu.
                </p>
                <p>
                  Trẻ con có Mũi tên Thụ động cần được cho nhiều bài tập vận động (bắt buộc) để trẻ phải có hoạt động thể chất. Tốt nhất là cha mẹ hãy làm gương cho con, tức là nếu muốn con vận động thì cha mẹ phải vận động trước, hoặc cùng con thực hiện bài tập hay hoạt động thể thao nào đó. Dành nhiều thời gian ngoài thiên nhiên cũng rất tốt cho trẻ. Có rất nhiều hoạt động phù hợp và bổ ích cho cả gia đình cùng tham gia: bơi lội, đi bộ, chạy marathon, đánh cầu lông, quần vợt hoặc tham gia các buổi tập thể dục nhịp điệu ngoài trời.
                </p>
                <p>
                  Bên cạnh đó, các bậc phụ huynh và thầy cô cần lập ra một số kế hoạch và khuyến khích trẻ thực hiện để "điền" số 9 ảo vào biểu đồ của trẻ. Các kế hoạch này có thể thiên về sự lĩnh hội một kiến thức hay kỹ năng nào đó ("điền" số 8 ảo), để qua đó trẻ có thêm vốn sống hoặc trải nghiệm ("điền" số 7 ảo). Bằng cách này, trẻ sẽ từ từ thay đổi.
                </p>
                <p>Nếu xét ở một mặt nào đó, giai đoạn thế giởi đang đối mặt với đại dịch COVID-19 chính là một khóa huấn luyện khổng lồ và nghiêm khắc để những người 2xxx "thức dậy". Vì vậy, hãy nhìn nó một cạc tích cực và tận dụng cơ hội này. Sau đại dịch sẽ là một kỷ nguyên của sự hài hòa.</p>
              </div>
            </div>
          :""}
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
