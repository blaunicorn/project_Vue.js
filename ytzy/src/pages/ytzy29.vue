<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
                        <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">干部考核</p></x-header>
    <div v-if = "getData2"><swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else><img class="img1" src="../assets/ytzy29-1.jpg"></div>
    <div class="border">
      <div class="flex">
        <div class="word">党政领导干部考核工作暂行规定</div>
      </div>
      <div class="line"></div>
 <div class="word-contant1"><br>&nbsp;&nbsp; &nbsp;&nbsp;第一章　总则<br>

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第一条　为全面、客观、公正、准确地考核党政领导班子和领导干部政治业务素质和履行职责的情况，加强对领导班子和领导干部的管理与监督、激励与约束，根据《党政领导干部选拔任用工作暂行条例》和国家有关法律、法规，制定本规定。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二条　本规定所称的考核工作，是指考核机关按照一定的程序和方法，对领导班子和领导干部的政治业务素质和履行职责的情况所进行的考察、核实、评价，并以此作为加强对领导班子的管理和领导干部任用、奖惩等的依据。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三条　考核工作必须坚持以下原则：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)党管干部原则；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)客观公正原则；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)注重实绩原则；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)群众公认原则。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四条　本规定适用于考核中共中央、国务院的工作部门(含派出机构)、全国人大常委会、全国政协的有关工作机构的领导班子和领导干部；最高人民法院、最高人民检察院的领导班子和领导干部；地方县以上(含县级)党委、人大常委会、政府、政协、纪委、法院、检察院的领导班子和领导干部；地方县以上(含县级)党委、政府的工作部门(含派出机构)和人大常委会、政协的有关工作机构的领导班子和领导干部。

　　县级以上党委、政府的直属事业单位和工会、共青团、妇联等人民团体的领导班子和领导干部的考核，参照本规定有关内容执行。

　　纪委、法院、检察院的内设机构的领导班子和领导干部，党委、政府工作部门(含派出机构)的内设机构的领导班子和领导干部，人大常委会、政协工作机构的内设机构的领导班子和领导干部，按照或参照《国家公务员暂行条例》的有关规定进行年度考核。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二章　考核方式

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第五条　对领导班子和领导干部的考核，包括平时考核、任职前考核、定期考核。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第六条　平时考核是对领导班子和领导干部所进行的经常性考核。考核机关通过检查工作、个别谈话、专项调查、派人参加领导班子民主生活会和年度总结工作会等多种形式和渠道，了解考核对象的有关情况。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　第七条　任职前考核按《党政领导干部选拔任用工作暂行条例》的有关规定进行。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　第八条　定期考核采取届中、届末考核的形式进行。没有明确届期的，每两年或三年进行一次定期考核。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　第三章　考核内容

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第九条　领导班子考核内容：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)思想政治建设包括理论学习、政治表现、贯彻执行党的路线方针政策、全心全意为人民服务、执行民主集中制、维护中央权威、团结协作、选人用人、廉政建设等情况。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)领导现代化建设的能力包括总揽全局、科学决策、求实创新、开拓进取和处理复杂问题等能力。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)工作实绩在经济建设、社会发展和精神文明建设、党的建设等方面所取得的成绩和效果，在推进改革、维护稳定方面取得的成绩和效果。地方县以上党委、政府领导班子的工作实绩主要包括：各项经济工作指标的完成情况，经济发展的速度、效益与后劲，以及财政收入增长幅度和人民生活水平提高的程度；教育、科技、文化、卫生、体育事业的发展，环境与生态保护、人口与计划生育、社会治安综合治理等状况；党的思想、组织、作风、制度建设的成效等。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;对部门领导班子，还要重点考核其发挥职能作用，完成各项工作任务，为经济建设服务的情况等。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第十条　领导干部考核内容：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)思想政治素质

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;理论素养和思想水平。学习马列主义、毛泽东思想特别是邓小平理论，学习党和国家的方针政策，掌握基本原理和精神实质，学以致用，不断提高理论和政策水平的情况；

　　<br>政治方向和政治立场。执行党的基本路线，在事关方向、原则问题上的立场、观点、态度，在政治、思想和行动上与中央保持一致，增强法制观念，严格依法办事的情况，贯彻执行《党政领导干部选拔任用工作暂行条例》的情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;群众观点和群众路线。实践全心全意为人民服务的宗旨，正确行使人民赋予的权力，联系群众，自觉为人民群众谋利益的情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;政治品德和道德品质。襟怀坦白，公道正派，坚持原则，严守纪律，谦虚谨慎，克己奉公，遵守社会主义道德，在精神文明建设中发挥表率作用的情况。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)组织领导能力

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;运用马克思主义的立场、观点和方法，分析、研究、解决实际问题的能力；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;组织协调、科学决策、开拓创新的能力；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;发现人才、培养干部、知人善任的能力。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;对党政正职领导干部，还要重点考核其驾驭全局、处理复杂问题的能力。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)工作作风

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;执行民主集中制，维护领导班子团结，发扬民主，虚心听取不同意见，勇于开展批评与自我批评的情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;坚持从群众中来、到群众中去的工作方法，深入实际，调查研究，求真务实的情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;勇于改革，敢于负责，坚持原则，严格管理，严谨细致，勤奋敬业的情况。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)工作实绩

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;在完成任期目标和履行岗位职责过程中所提出的工作思路、采取的措施、发挥的具体作用以及所取得的绩效等。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(五)廉洁自律

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;保持和发扬艰苦奋斗的优良传统，遵守中央关于党政领导干部廉洁自律的有关规定，清正廉洁，以身作则，自重、自省、自警、自励的情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;执行党风廉政建设责任制的情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;对亲属及身边工作人员加强教育、严格要求的情况。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第十一条　逐步建立健全领导班子任期目标和领导干部岗位职责规范，以此作为考核党政领导班子和领导干部的重要根据。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;各级考核机关可会同有关部门根据不同地区、不同层次、不同部门的特点，结合考核工作的实际需要，对考核内容进一步分解细化，制定具体的考核指标体系。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四章　考核程序

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第十二条　定期考核的基本程序：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)考核准备；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)述职；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)民主测评；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)个别谈话；

　<br>&nbsp;&nbsp; &nbsp;&nbsp;(五)调查核实；

　<br>&nbsp;&nbsp; &nbsp;&nbsp;(六)撰写考核材料；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(七)综合分析，评定考核结果；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(八)反馈。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　第十三条考核准备：

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　(一)拟定考核方案；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)组成考核组；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)组织考核人员进行学习或培训；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)考核组与被考核单位商定考核工作的实施计划。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第十四条　召开述职会议：进行考核动员。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　领导班子主要负责人代表领导班子述职，同时作个人的述职报告，领导班子其他成员作本人的述职报告。根据实际情况，有的也可以进行书面述职。述职报告应根据考核内容实事求是地汇报领导班子或个人的情况，不扩大成绩，不隐瞒缺点或错误，事实清楚，简明扼要。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第十五条　参加述职会议的人员由考核组参照如下范围确定：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)考核党委、政府的领导班子和领导干部时，参加述职会议的人员应包括同级党委、人大常委会、政府、政协、纪委、法院、检察院的领导干部；所属工作部门(含派出机构)的主要领导干部；下一级党政领导班子的主要领导干部；有关企业、事业单位的主要负责人；工会、共青团、妇联等人民团体和民主党派负责人；其他需要参加的人员。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)考核党委、政府各工作部门的领导班子和领导干部时，参加述职会议的人员应包括考核对象所在单位的中层干部，受该工作部门领导或指导的下级单位的负责人，其他需要参加的人员。人数较少的单位可扩大到全体干部、职工。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　第十六条民主测评包括民意测验和民主评议。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;民意测验应根据考核内容列出评价项目和评价等次，由参加民意测验的人员填写评价意见。民意测验表由考核组回收，并对不同层次人员填写的民意测验票分别进行统计。参加民意测验人员的范围应与参加述职会议人员范围基本一致。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;民主评议由考核组主持，采取召开小型座谈会或书面评议的方式进行。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第十七条　个别谈话要选择了解情况的人员，并注意代表性，具体人选由考核组确定，一般包括：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)考核对象所在地区或部门的同级领导干部、下一级的领导干部，组织人事部门、纪检监察机关和机关党组织的有关人员；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)考核对象所分管的下级单位、部门、内设机构的负责人和机关工作人员代表；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)考核对象本人；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)其他熟悉和了解情况的人员。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;个别谈话时，考核组应有两名以上人员参加，并做好谈话记录。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第十八条　考核组根据需要可采取下列方法调查核实考核对象的有关情况：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)查阅资料。查阅考核对象的人事档案材料、年度工作总结、党委(党组)会议记录、民主生活会记录、中心组学习记录、培训记录、主持制定的文件、重要会议上的讲话稿、发表的文章及研究成果、读书笔记、个人重大事项报告表、收入申报表等。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)采集核实有关数据。从统计部门和有关业务部门采集、核实有关考核对象工作实绩的数据。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)审计。委托审计机关进行任期经济责任审计或请审计机关提供考核对象的有关审计情况。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)实地考察。通过现场察看、访问群众，了解、印证和核实考核对象某一方面的工作情况。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(五)专项调查。对一些群众反映大、情况比较复杂或意见分歧较大的问题，由考核组进行专项调查，也可责成所在单位党委(党组)进行调查，写出专题报告。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(六)征求意见。采取面谈或发函的方式征求上一级分管领导同志、相关部门、执纪执法机关和同级有关部门的意见。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(七)理论学习情况测试。在与考核对象个别谈话时，可以测试了解领导干部掌握理论知识的情况和运用理论知识分析、解决实际问题的能力。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第十九条　考核组在考核对象所在的地区或单位工作结束时，应就干部和群众反映的问题和意见与被考核的领导班子成员集体或个别交换意见。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十条　考核组在综合分析的基础上，写出考核材料，并向考核机关报告考核情况。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十一条　领导班子考核材料应包括以下内容：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)考核工作的简要情况和领导班子的基本情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)考核情况，包括领导班子取得的成绩和存在的问题及其原因；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)民意测验和民主评议的情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)考核组的评价和建议，包括对领导班子的总体评价，调整领导班子和加强领导班子建设的建议。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十二条　领导干部考核材料应包括以下内容：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)考核情况。包括优点和取得的成绩、存在的不足、问题，要实事求是地反映干部的情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)民意测验和民主评议的情况；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)考核组对评定等次的建议。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十三条　评定考核结果由考核机关提出意见，报党委(党组)决定。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十四条　考核结果应正式通知考核对象，考核对象对考核结果若有异议，可以提出申诉。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第五章　考核结果的评定和运用

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十五条　定期考核时，对领导班子的整体评价和对领导干部考核结果的评定，应采取定性与定量分析相结合的方法进行。评价工作实绩要进行定量分析，要把握好个人与集体、局部与全局、当前与长远、显绩与潜绩的关系。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十六条　对领导班子的考核要作出整体评价，并提出加强领导班子建设的具体建议。对存在问题应督促其进行整改，问题严重的应责令整顿，限期改进，必要时采取组织措施予以调整。领导班子的考核结果是否划分等次，由考核机关根据实际情况决定。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十七条　领导干部考核结果分为优秀、称职、基本称职、不称职四个等次。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十八条　评定领导干部的考核结果要把民意测验的结果作为重要依据。考核机关可根据实际情况制定不同等次的得票率标准。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第二十九条　领导干部经考核全部项目达到下列标准者，应评定为优秀等次：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)思想政治素质高；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)组织领导能力强；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)密切联系群众，工作作风好；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)工作实绩突出；

　<br>&nbsp;&nbsp; &nbsp;&nbsp;(五)清正廉洁。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;评定为优秀等次的，民意测验优秀和称职票的得票率要达到考核机关规定的标准。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十条　领导干部经考核多数项目符合下列标准者，应评定为称职等次：

　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)思想政治素质较高；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)组织领导能力较强；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)联系群众，工作作风较好；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)工作实绩比较突出；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(五)能做到廉洁自律。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;评定为称职等次的，民意测验称职和优秀票得票率要达到考核机关规定的标准。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十一条　领导干部经考核多数项目符合下列情况者，应评定为基本称职等次：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)思想政治素质一般；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)组织领导能力较弱；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)工作作风方面存在某些不足；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)能基本完成年度工作目标，但工作实绩不突出；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(五)能基本做到廉洁自律，但某些方面还有差距。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;民意测验基本称职和不称职票得票率超过考核机关规定标准的，一般应评定为基本称职。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十二条　领导干部经考核存在下列情况之一者，应评定为不称职等次：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)思想政治素质方面存在突出问题；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)组织领导能力差，不能胜任现职领导岗位；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)在领导班子中闹无原则纠纷，严重影响班子团结或工作作风存在严重问题；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)有以权谋私行为，存在不廉洁问题；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(五)工作不负责任，给党和人民的事业造成较大损失；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(六)连续两年未完成年度工作目标，工作实绩差。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　民意测验不称职票的得票率超过考核机关规定标准的，除特殊情况外，一般应评为不称职。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十三条　考核结果应作为领导干部选拔任用、职务升降、奖惩、培训、调整级别和工资等的重要依据。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;选拔担任上一级领导职务的人选，应从考核中被评定为优秀、称职的干部中产生。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十四条　领导干部在考核中被评定为优秀、称职、基本称职等次的，按有关规定晋升级别和工资。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十五条　领导干部在考核中被评定为基本称职的，考核机关应对其提出诫勉，限期改进。视具体情况，也可以调整其领导职务。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十六条　领导干部在考核中被评定为不称职的，应视具体情况，按干部管理权限和法定程序作如下处理：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)免去现任领导职务；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)责令辞去领导职务；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)降职。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;领导干部被免去现任领导职务或责令辞去领导职务后，可另行分配适当工作。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十七条　考核意见反馈后，领导班子应及时召开民主生活会，开展批评和自我批评，研究整改措施，并向考核机关报告。同时将有关内容在一定范围内通报。考核机关应根据考核结果，加强对领导班子和领导干部的管理和监督。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十八条　考核工作结束后，领导干部综合评价材料存入本人档案。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第三十九条　考核中发现领导干部有违纪问题的，应建议纪检、监察机关查处。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第六章　考核机关

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四十条　本规定所称的考核机关，是指党委的干部主管部门。干部主管部门在党委(党组)领导下，按照干部管理权限考核党政领导班子和领导干部。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四十一条　对双重管理的领导班子和领导干部，以主管方为主，协管方协助，共同组织实施考核工作。在评定考核结果时，主管方应征求协管方的意见。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　第四十二条　考核组由考核机关组建并派出，对考核机关负责。需要时，考核机关可约请或抽调其他单位的人员，参加考核组的工作。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四十三条　考核人员应具备下列条件：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)具有较高的思想政治素质，公道正派；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(二)熟悉或了解组织人事工作；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)具有胜任考核工作所需要的政策水平和业务知识；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)具有一定的综合分析能力和文字表达能力。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;考核组组长应由具有较高的组织领导能力和政策水平的领导干部或担任过一定领导职务的同志担任。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第七章　考核的纪律与监督

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四十四条　考核人员要认真履行考核职责，按照规定的程序和要求实施考核，要全面、准确、细致地了解和客观公正地反映考核对象的情况。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;实行考核工作责任制。考核人员和考核组组长要在考核材料上签名，对考核材料和考核报告的客观性、真实性负责。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四十五条　实行考核工作回避制度。回避对象包括：与自己有夫妻关系、直系血亲关系、三代以内旁系血亲关系、近姻亲关系及其他原因需要回避的人员。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;对考核人员还应实行一定范围的地域回避。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四十六条　考核对象要正确对待组织考核，如实汇报工作和思想，客观反映有关情况。

　<br>&nbsp;&nbsp; &nbsp;&nbsp;　第四十七条　有关部门和人员应客观、负责地向考核组提供真实情况和数据。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四十八条　在考核工作中，考核人员和考核对象必须遵守以下纪律：

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(一)不准凭个人好恶了解或反映情况；

　  <br>&nbsp;&nbsp; &nbsp;&nbsp;(二)不准借考核之机谋取私利；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(三)不准泄露考核机密；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(四)不准故意夸大、缩小、隐瞒、歪曲事实；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(五)不准搞非组织活动；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(六)不准设置障碍、干扰或妨碍考核工作；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(七)不准弄虚作假、向考核组提供虚假数据；

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;(八)不准对反映其问题的人打击报复。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第四十九条　对违反第四十八条规定的，视其性质、情节轻重和造成的后果，进行批评教育，或给予党纪、政纪处分。造成考核结果失实的，宣布考核无效。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第五十条　加强对考核工作的监督。党委(党组)、组织(人事)部门、纪检(监察)机关对考核工作实施监督；支持、鼓励群众监督，认真受理下级机关、干部、群众的检举、申诉，并按职权范围及时进行核查和处理。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第八章　附则

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第五十一条　乡(镇、街道)党政领导干部的考核，由省、自治区、直辖市党委根据本规定制定相应的办法。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第五十二条　各省、自治区、直辖市党委可根据本规定，结合本地实际，制定实施细则。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第五十三条　本规定由中共中央组织部负责解释。

　　<br>&nbsp;&nbsp; &nbsp;&nbsp;第五十四条　本规定自发布之日起施行。凡过去规定与本规定不符的，按本规定执行。
 </div>
    </div>
  </div>
</template>
<script>
  import { XHeader, Cell, Swiper } from 'vux'
  export default {
    components: {
      XHeader,
      Cell,
      Swiper
    },
    data () {
      return {
        getData2: false,
        demo07_index: 0,
        imgSwiper: []
      }
    },
    created () {
      let that = this
      // 轮播图
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'carousel/get-carousels-by-category',
          sid: '12345qwe',
          category: '7'
        }
      }).then((response) => {
        console.log(response.data)
        that.imgSwiper = response.data.carousels
        let i
        for (i = 0; i < that.imgSwiper.length; i++) {
          that.imgSwiper[i].img = that.GLOBAL.URL + that.imgSwiper[i].img
        }
        that.getData2 = false
      })
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
        if (index === 9) {
          this.$router.push('/ytzy17')
        }
      }
    }
  }
</script>
<style scoped>
  .x-header{
    background: red;
  }
  .title{
    text-align: center;
    font-size: 18px;
    color: #ffffff;
  }
  .cell{
    margin-top: -10px;
    font-size: 20px;
  }
  .img1{
    margin-top: 0px;
    width: 100%;
    height: 180px;
  }
  .img2{
    margin-top: 15px;
    width: 94%;
    margin-left: 3%;
    height: 80px;
  }
  .border{
    background: #ffffff;
    margin-top: 10px;
    border-left: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .word{
   text-align: center;
    font-size: 20px;
    color:#000000 ;
    margin-left: 10px;
  }
  .word-contant{
   text-align: center;
    font-size: 18px;
    color:#000000 ;
    margin-left: 10px;
  }
  .word-contant1{
   text-align: left;
    font-size: 14px;
    color:#000000 ;
    margin-left: 20px;
    margin-right: 20px;
  }
  .tubiao1{
    width: 20px;
    height: 20px;
  }
  .line{
    border-bottom: solid 3px #F22222;
    width: 100%;
  }  
</style>
