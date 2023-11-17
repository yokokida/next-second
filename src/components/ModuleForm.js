export default function ModuleForm() {
  return (
    <>
      <div class="fields">
        <dl>
          <dt class="required">氏名</dt>
          <dd>
            <input
              type="text"
              name="your-name"
              required="required"
              placeholder="山田太朗"
            />
          </dd>
        </dl>
        <dl>
          <dt class="required">ふりがな</dt>
          <dd>
            <input
              type="text"
              name="your-kana"
              required="required"
              placeholder="やまだたろう"
            />
          </dd>
        </dl>
        <dl>
          <dt class="required">住所</dt>
          <dd>
            <input
              type="text"
              name="your-zip"
              required="required"
              placeholder="000-0000"
            />
            <input
              type="text"
              name="your-address"
              required="required"
              placeholder="新潟県新潟市"
            />
          </dd>
        </dl>
        <dl>
          <dt class="required">メールアドレス</dt>
          <dd>
            <input
              type="email"
              name="your-email"
              required="required"
              placeholder="xxx@gmail.com"
            />
          </dd>
        </dl>
        <dl>
          <dt class="required">電話番号</dt>
          <dd>
            <input
              type="tel"
              name="your-tel"
              required="required"
              placeholder="000-0000-0000"
            />
          </dd>
        </dl>
        <dl>
          <dt class="required">備考・メッセージ</dt>
          <dd>
            <textarea
              cols="40"
              rows="10"
              name="your-content"
              required="required"
              placeholder="ご入力ください"
            ></textarea>
          </dd>
        </dl>
      </div>
      <p class="consent">
        <a href="/privacy-policy/">プライバシーポリシー</a>に同意しました。
      </p>
      <div class="submit">
        <button class="btn-tertiary" type="submit">
          送信する
        </button>
      </div>
    </>
  );
}
