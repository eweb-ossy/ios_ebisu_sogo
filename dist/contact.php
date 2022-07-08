<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ｜ゑびすグループ「満てん」「ゑびす」「牛粋」「ぶたと和いん」宮城県の飲食店グループ</title>
    <link rel="stylesheet" href="css/contact.css?<?= time() ?>">
</head>
<body>
    <?php require('include/nav.php'); ?>
    <div class="mv">
        <div class="contact-header">
            <h1>お問い合わせ<span>Contact us</span></h1>
        </div>
        <div class="breadcrumblist">
            <ul>
                <li><a href="/">TOP</a></li>
                <li><a href="contact.html">お問い合わせ</a></li>
            </ul>
        </div>
    </div>
    <section class="contact">
        <p class="contact-info">商品についてや弊社の事業についてなど、お気軽にお問い合わせください。</p>
        <div class="inner">
            <form action="">
                <div class="row">
                    <!-- 17px b 000 e73828 -->
                    <div class="title">お名前<span>【必須】</span></div>
                    <div class="field">
                        <!-- 17px b a3a3a3 -->
                        <input type="text" placeholder="山田 太郎" required>
                    </div>
                </div>
                <div class="row">
                    <div class="title">フリガナ<span>【必須】</span></div>
                    <div class="field">
                        <input type="text" placeholder="ヤマダ タロウ" required>
                    </div>
                </div>
                <div class="row">
                    <div class="title">企業名・店舗名</div>
                    <div class="field">
                        <input type="text" placeholder="(株)〇〇食品サービス">
                    </div>
                </div>
                <div class="row">
                    <div class="title">メールアドレス<span>【必須】</span></div>
                    <div class="field">
                        <input type="email" placeholder="〇〇〇〇〇〇@example.com" required>
                    </div>
                </div>
                <div class="row">
                    <div class="title">お電話番号<span>【必須】</span></div>
                    <div class="field">
                        <div class="input-wrap">
                            <input class="short" type="text" placeholder="000" required>
                        </div>
                        <div class="input-wrap">
                            <input class="short" type="text" placeholder="000" required>
                        </div>
                        <input class="short l" type="text" placeholder="000" required>
                    </div>
                </div>
                <div class="row">
                    <div class="title">郵便番号</div>
                    <div class="field">
                        <div class="input-wrap">
                            <input id="zipcode1" class="short" type="text" placeholder="000">
                        </div>
                        <input id="zipcode2" class="short l" type="text" placeholder="000">
                        <div id="getAddress" class="zip-btn">郵便番号から住所を入力</div>
                    </div>
                </div>
                <div class="row">
                    <div class="title pref">都道府県</div>
                    <div class="field">
                        <div class="select-wrap">
                            <select id="pref_name">
                                <option value="北海道">北海道</option>
                                <option value="青森県">青森県</option>
                                <option value="岩手県">岩手県</option>
                                <option value="宮城県">宮城県</option>
                                <option value="秋田県">秋田県</option>
                                <option value="山形県">山形県</option>
                                <option value="福島県">福島県</option>
                                <option value="茨城県">茨城県</option>
                                <option value="栃木県">栃木県</option>
                                <option value="群馬県">群馬県</option>
                                <option value="埼玉県">埼玉県</option>
                                <option value="千葉県">千葉県</option>
                                <option value="東京都">東京都</option>
                                <option value="神奈川県">神奈川県</option>
                                <option value="新潟県">新潟県</option>
                                <option value="富山県">富山県</option>
                                <option value="石川県">石川県</option>
                                <option value="福井県">福井県</option>
                                <option value="山梨県">山梨県</option>
                                <option value="長野県">長野県</option>
                                <option value="岐阜県">岐阜県</option>
                                <option value="静岡県">静岡県</option>
                                <option value="愛知県">愛知県</option>
                                <option value="三重県">三重県</option>
                                <option value="滋賀県">滋賀県</option>
                                <option value="京都府">京都府</option>
                                <option value="大阪府">大阪府</option>
                                <option value="兵庫県">兵庫県</option>
                                <option value="奈良県">奈良県</option>
                                <option value="和歌山県">和歌山県</option>
                                <option value="鳥取県">鳥取県</option>
                                <option value="島根県">島根県</option>
                                <option value="岡山県">岡山県</option>
                                <option value="広島県">広島県</option>
                                <option value="山口県">山口県</option>
                                <option value="徳島県">徳島県</option>
                                <option value="香川県">香川県</option>
                                <option value="愛媛県">愛媛県</option>
                                <option value="高知県">高知県</option>
                                <option value="福岡県">福岡県</option>
                                <option value="佐賀県">佐賀県</option>
                                <option value="長崎県">長崎県</option>
                                <option value="熊本県">熊本県</option>
                                <option value="大分県">大分県</option>
                                <option value="宮崎県">宮崎県</option>
                                <option value="鹿児島県">鹿児島県</option>
                                <option value="沖縄県">沖縄県</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="title">ご住所</div>
                    <div class="field">
                        <input id="address" type="text" placeholder="〇〇市〇〇町0-00-0">
                    </div>
                </div>
                <div class="row up">
                    <div class="title">お問い合わせ内容<span>【必須】</span></div>
                    <div class="field">
                        <textarea placeholder="お問い合わせ内容をご入力ください。" required></textarea>
                    </div>
                </div>
                <div class="privacypolicy">
                    <a href="privacypolicy.html">個人情報保護方針(プライバシーポリシー)はこちら</a>
                </div>
                <div class="submit-btn">
                    <button type="submit">個人情報保護方針に同意して送信する</button>
                </div>
            </form>
        </div>
    </section>
    <?php require('include/contact.php'); ?>
    <?php require('include/footer.php'); ?>
    <script src="js/contact.js?<?= time() ?>"></script>
</body>
</html>