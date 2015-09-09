'use strict'

module.exports = function (word) {
  var key = word.toLowerCase()
  var alternatives = {
    'a number of': [
      'many',
      'some'
    ],
    'abundance': [
      'enough',
      'plenty'
    ],
    'accede to': [
      'allow',
      'agree to'
    ],
    'accelerate': [
      'speed up'
    ],
    'accentuate': [
      'stress'
    ],
    'accompany': [
      'go with',
      'with'
    ],
    'accomplish': [
      'do'
    ],
    'accorded': [
      'given'
    ],
    'accrue': [
      'add',
      'gain'
    ],
    'acquiesce': [
      'agree'
    ],
    'acquire': [
      'get'
    ],
    'additional': [
      'more',
      'extra'
    ],
    'adjacent to': [
      'next to'
    ],
    'adjustment': [
      'change'
    ],
    'admissible': [
      'allowed',
      'accepted'
    ],
    'advantageous': [
      'helpful'
    ],
    'adversely impact': [
      'hurt'
    ],
    'advise': [
      'tell'
    ],
    'aforementioned': [
      'remove'
    ],
    'aggregate': [
      'total',
      'add'
    ],
    'aircraft': [
      'plane'
    ],
    'all of': [
      'all'
    ],
    'alleviate': [
      'ease',
      'reduce'
    ],
    'allocate': [
      'divide'
    ],
    'along the lines of': [
      'like',
      'as in'
    ],
    'already existing': [
      'existing'
    ],
    'alternatively': [
      'or'
    ],
    'ameliorate': [
      'improve',
      'help'
    ],
    'anticipate': [
      'expect'
    ],
    'apparent': [
      'clear',
      'plain'
    ],
    'appreciable': [
      'many'
    ],
    'as a means of': [
      'to'
    ],
    'as of yet': [
      'yet'
    ],
    'as to': [
      'on',
      'about'
    ],
    'as yet': [
      'yet'
    ],
    'ascertain': [
      'find out',
      'learn'
    ],
    'assistance': [
      'help'
    ],
    'at this time': [
      'now'
    ],
    'attain': [
      'meet'
    ],
    'attributable to': [
      'because'
    ],
    'authorize': [
      'allow',
      'let'
    ],
    'because of the fact that': [
      'because'
    ],
    'belated': [
      'late'
    ],
    'benefit from': [
      'enjoy'
    ],
    'bestow': [
      'give',
      'award'
    ],
    'by virtue of': [
      'by',
      'under'
    ],
    'cease': [
      'stop'
    ],
    'close proximity': [
      'near'
    ],
    'commence': [
      'begin or start'
    ],
    'comply with': [
      'follow'
    ],
    'concerning': [
      'about',
      'on'
    ],
    'consequently': [
      'so'
    ],
    'consolidate': [
      'join',
      'merge'
    ],
    'constitutes': [
      'is',
      'forms',
      'makes up'
    ],
    'demonstrate': [
      'prove',
      'show'
    ],
    'depart': [
      'leave',
      'go'
    ],
    'designate': [
      'choose',
      'name'
    ],
    'discontinue': [
      'drop',
      'stop'
    ],
    'due to the fact that': [
      'because',
      'since'
    ],
    'each and every': [
      'each'
    ],
    'economical': [
      'cheap'
    ],
    'eliminate': [
      'cut',
      'drop',
      'end'
    ],
    'elucidate': [
      'explain'
    ],
    'employ': [
      'use'
    ],
    'endeavor': [
      'try'
    ],
    'enumerate': [
      'count'
    ],
    'equitable': [
      'fair'
    ],
    'equivalent': [
      'equal'
    ],
    'evaluate': [
      'test',
      'check'
    ],
    'evidenced': [
      'showed'
    ],
    'exclusively': [
      'only'
    ],
    'expedite': [
      'hurry'
    ],
    'expend': [
      'spend'
    ],
    'expiration': [
      'end'
    ],
    'facilitate': [
      'ease',
      'help'
    ],
    'factual evidence': [
      'facts',
      'evidence'
    ],
    'feasible': [
      'workable'
    ],
    'finalize': [
      'complete',
      'finish'
    ],
    'first and foremost': [
      'first'
    ],
    'for the purpose of': [
      'to'
    ],
    'forfeit': [
      'lose',
      'give up'
    ],
    'formulate': [
      'plan'
    ],
    'honest truth': [
      'truth'
    ],
    'however': [
      'but',
      'yet'
    ],
    'if and when': [
      'use either word; not both'
    ],
    'impacted': [
      'affected',
      'harmed',
      'changed'
    ],
    'implement': [
      'install',
      'put in place; tool'
    ],
    'in a timely manner': [
      'on time'
    ],
    'in accordance with': [
      'by',
      'under'
    ],
    'in addition': [
      'also',
      'besides',
      'too'
    ],
    'in all likelihood': [
      'probably'
    ],
    'in an effort to': [
      'to'
    ],
    'in between': [
      'between'
    ],
    'in excess of': [
      'more than'
    ],
    'in lieu of': [
      'instead'
    ],
    'in light of the fact that': [
      'because'
    ],
    'in many cases': [
      'often'
    ],
    'in order to': [
      'to'
    ],
    'in regard to': [
      'about',
      'concerning',
      'on'
    ],
    'in some instances ': [
      'sometimes'
    ],
    'in terms of': [
      'for',
      'as',
      'with'
    ],
    'in the near future': [
      'soon'
    ],
    'inception': [
      'start'
    ],
    'incumbent upon': [
      'must'
    ],
    'indicate': [
      'say',
      'state',
      'or show'
    ],
    'indication': [
      'sign'
    ],
    'initiate': [
      'start'
    ],
    'is applicable to': [
      'applies to'
    ],
    'is authorized to': [
      'may'
    ],
    'is responsible for': [
      'handles'
    ],
    'it is essential': [
      'must',
      'need to'
    ],
    'magnitude': [
      'size'
    ],
    'maximum': [
      'greatest',
      'largest',
      'most'
    ],
    'methodology': [
      'method'
    ],
    'minimize': [
      'cut'
    ],
    'minimum': [
      'least',
      'smallest',
      'small'
    ],
    'modify': [
      'change'
    ],
    'monitor': [
      'check',
      'watch',
      'track'
    ],
    'multiple': [
      'many'
    ],
    'necessitate': [
      'cause',
      'need'
    ],
    'nevertheless': [
      'still',
      'besides',
      'even so'
    ],
    'not certain': [
      'uncertain'
    ],
    'not many': [
      'few'
    ],
    'not often': [
      'rarely'
    ],
    'not unless': [
      'only if'
    ],
    'not unlike': [
      'similar',
      'alike'
    ],
    'notwithstanding': [
      'in spite of',
      'still'
    ],
    'null and void': [
      'use either null or void'
    ],
    'numerous': [
      'many'
    ],
    'objective': [
      'aim',
      'goal'
    ],
    'obligate': [
      'bind',
      'compel'
    ],
    'obtain': [
      'get'
    ],
    'on the contrary': [
      'but',
      'so'
    ],
    'on the other hand': [
      'but',
      'so'
    ],
    'one particular': [
      'one'
    ],
    'optimum': [
      'best',
      'greatest',
      'most'
    ],
    'owing to the fact that': [
      'because',
      'since'
    ],
    'participate': [
      'take part'
    ],
    'particulars': [
      'details'
    ],
    'pass away': [
      'die'
    ],
    'pertaining to': [
      'about',
      'of',
      'on'
    ],
    'point in time': [
      'time',
      'point',
      'moment',
      'now'
    ],
    'portion': [
      'part'
    ],
    'possess': [
      'have',
      'own'
    ],
    'preclude': [
      'prevent'
    ],
    'previously': [
      'before'
    ],
    'prior to': [
      'before'
    ],
    'prioritize': [
      'rank',
      'focus on'
    ],
    'procure': [
      'buy',
      'get'
    ],
    'proficiency': [
      'skill'
    ],
    'provided that': [
      'if'
    ],
    'purchase': [
      'buy',
      'sale'
    ],
    'readily apparent': [
      'clear'
    ],
    'refer back': [
      'refer'
    ],
    'regarding': [
      'about',
      'of',
      'on'
    ],
    'relocate': [
      'move'
    ],
    'remainder': [
      'rest'
    ],
    'remuneration': [
      'payment'
    ],
    'require': [
      'must',
      'need'
    ],
    'requirement': [
      'need',
      'rule'
    ],
    'reside': [
      'live'
    ],
    'residence': [
      'house'
    ],
    'retain': [
      'keep'
    ],
    'satisfy': [
      'meet',
      'please'
    ],
    'shall': [
      'must',
      'will'
    ],
    'should you wish': [
      'if you want'
    ],
    'similar to': [
      'like'
    ],
    'solicit': [
      'ask for',
      'request'
    ],
    'span across': [
      'span',
      'cross'
    ],
    'strategize': [
      'plan'
    ],
    'subsequent': [
      'later',
      'next',
      'after',
      'then'
    ],
    'substantial': [
      'large',
      'much'
    ],
    'successfully complete': [
      'complete',
      'pass'
    ],
    'sufficient': [
      'enough'
    ],
    'terminate': [
      'end',
      'stop'
    ],
    'therefore': [
      'thus',
      'so'
    ],
    'this day and age': [
      'today'
    ],
    'time period': [
      'time',
      'period'
    ],
    'took advantage of': [
      'preyed on'
    ],
    'transmit': [
      'send'
    ],
    'transpire': [
      'happen'
    ],
    'until such time as': [
      'until'
    ],
    'utilization': [
      'use'
    ],
    'utilize': [
      'use'
    ],
    'validate': [
      'confirm'
    ],
    'various different': [
      'various',
      'different'
    ],
    'whether or not': [
      'whether'
    ],
    'with respect to': [
      'on',
      'about'
    ],
    'with the exception of': [
      'except for'
    ],
    'witnessed': [
      'saw',
      'seen'
    ]
  }

  return alternatives[key] || []
}
