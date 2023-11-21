export default function RecruitIntro() {
  const conditionTable01 = [
    {
      head: "業務内容",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務地",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務時間",
      cont: "8：00～17：00（休憩60分）\n\n\n現場によっては、緊急の時間外対応、夜間工事があります。",
    },
    {
      head: "休日休暇",
      cont: "原則週休二日制：日曜日、祝日、その他（会社カレンダーによります）<br>その他、有給休暇、夏期休暇、年末年始休暇<br>年間休日数：110日",
    },
    {
      head: "福利厚生",
      cont: "社会保険、健康保険、厚生年金保険、雇用保険、労災保険、資格取得支援制度、財形貯蓄制度、制服貸与、定期健康診断、退職金共済加入制度",
    },
    {
      head: "給与",
      cont: "大学卒 215,000円～<br>高校卒 200,000円～<br>昇給：年1回<br>試用期間：3か月<br>試用期間中の労働条件：同条件",
    },
    {
      head: "手当等",
      cont: "通勤手当（上限24,500円）、家族手当（扶養家族1名につき10,000円 ※子ども18歳まで）、借家手当、資格手当",
    },
    {
      head: "賞与",
      cont: "年2回",
    },
    {
      head: "応募条件",
      cont: "普通自動車運転免許<br>39歳以下の方（例外事由３号のイ）",
    },
    {
      head: "選考方法",
      cont: "ページ下部の応募フォームよりご応募ください。選考のうえ追ってご連絡いたします。",
    },
  ];
  const conditionTable02 = [
    {
      head: "業務内容",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務地",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務時間",
      cont: "8：00～17：00（休憩60分）<br><br>現場によっては、緊急の時間外対応、夜間工事があります。",
    },
    {
      head: "休日休暇",
      cont: "原則週休二日制：日曜日、祝日、その他（会社カレンダーによります）<br>その他、有給休暇、夏期休暇、年末年始休暇<br>年間休日数：110日",
    },
    {
      head: "福利厚生",
      cont: "社会保険、健康保険、厚生年金保険、雇用保険、労災保険、資格取得支援制度、財形貯蓄制度、制服貸与、定期健康診断、退職金共済加入制度",
    },
    {
      head: "給与",
      cont: "大学卒 215,000円～<br>高校卒 200,000円～<br>昇給：年1回<br>試用期間：3か月<br>試用期間中の労働条件：同条件",
    },
    {
      head: "手当等",
      cont: "通勤手当（上限24,500円）、家族手当（扶養家族1名につき10,000円 ※子ども18歳まで）、借家手当、資格手当",
    },
    {
      head: "賞与",
      cont: "年2回",
    },
    {
      head: "応募条件",
      cont: "普通自動車運転免許<br>39歳以下の方（例外事由３号のイ）",
    },
    {
      head: "選考方法",
      cont: "ページ下部の応募フォームよりご応募ください。選考のうえ追ってご連絡いたします。",
    },
  ];
  return (
    <>
      <section id="recruit-requirement">
        <div class="sec-inner pt0">
          <div class="content-width">
            <div class="sec-ttl-box fadein-trigger is-active">
              <h2 class="sec-ttl">requirement</h2>
              <p class="sec-sub-ttl">募集要項</p>
            </div>
            <div class="content-box">
              <div class="m-tab-panel">
                <ul class="tab-group">
                  <li class="tab is-active">
                    <span>新卒採用</span>
                  </li>
                  <li class="tab">
                    <span>中途採用</span>
                  </li>
                </ul>
                <div class="panel-group">
                  <div class="panel is-show">
                    <h3 class="ttl ttl-large">新卒採用</h3>
                    <div class="m-dl-container">
                      {conditionTable01.map((condition) => (
                        <dl>
                          <dt>{condition["head"]}</dt>
                          <dd>{condition["cont"]}</dd>
                        </dl>
                      ))}
                    </div>
                  </div>
                  <div class="panel">
                    <h3 class="ttl ttl-large">中途採用</h3>
                    <div class="m-dl-container">
                      {conditionTable02.map((condition) => (
                        <dl>
                          <dt>{condition["head"]}</dt>
                          <dd>{condition["cont"]}</dd>
                        </dl>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
