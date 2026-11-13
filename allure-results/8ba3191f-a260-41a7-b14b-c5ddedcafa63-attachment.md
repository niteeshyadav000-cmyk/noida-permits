# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login_codegen.spec.js >> test
- Location: tests\login_codegen.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic [ref=e7]:
    - generic [ref=e8]:
      - heading "Login" [level=2] [ref=e9]
      - paragraph [ref=e10]: Sign in to continue
    - generic [ref=e11]:
      - generic [ref=e14]:
        - generic [ref=e15]:
          - generic [ref=e16]:
            - text: Email Address
            - generic [aria-hidden] [ref=e17]: "*"
          - textbox "Email Address" [ref=e18]
        - generic [ref=e19]:
          - img [aria-hidden]: email
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]:
            - text: Password
            - generic [aria-hidden] [ref=e26]: "*"
          - textbox "Password" [ref=e27]:
            - /placeholder: Enter Password
        - button [ref=e29] [cursor=pointer]:
          - img [aria-hidden] [ref=e30]: visibility_off
      - button "Login" [ref=e34]
      - generic [ref=e38] [cursor=pointer]:
        - text: Don't have an account?
        - generic [ref=e39]: SignUp
  - generic [ref=e40]:
    - generic [ref=e41]:
      - heading "Signup" [level=2] [ref=e42]
      - paragraph [ref=e43]: Create your AeroSlot account
    - generic [ref=e44]:
      - generic [ref=e45]:
        - generic [ref=e49] [cursor=pointer]:
          - generic [ref=e50]:
            - text: Select Operator
            - generic [aria-hidden] [ref=e51]: "*"
          - combobox "Select Operator" [ref=e52]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - text: Username
            - generic [aria-hidden] [ref=e66]: "*"
          - textbox "Username" [ref=e67]
      - generic [ref=e69]:
        - generic [ref=e72]:
          - generic [ref=e73]:
            - generic [ref=e74]:
              - text: Email Address
              - generic [aria-hidden] [ref=e75]: "*"
            - textbox "Email Address" [ref=e76]
          - generic [ref=e77]:
            - img [aria-hidden]: email
        - generic [ref=e81]:
          - generic [ref=e82]:
            - generic [ref=e83]:
              - text: Phone Number
              - generic [aria-hidden] [ref=e84]: "*"
            - textbox "Phone Number" [ref=e85]
          - generic [ref=e86]:
            - img [aria-hidden]: phone
      - generic [ref=e88]:
        - generic [ref=e91]:
          - generic [ref=e92]:
            - generic [ref=e93]:
              - text: Password
              - generic [aria-hidden] [ref=e94]: "*"
            - textbox "Password" [ref=e95]
          - img [aria-hidden] [ref=e97] [cursor=pointer]: visibility
        - generic [ref=e101]:
          - generic [ref=e102]:
            - generic [ref=e103]:
              - text: Confirm Password
              - generic [aria-hidden] [ref=e104]: "*"
            - textbox "Confirm Password" [ref=e105]
          - img [aria-hidden] [ref=e107] [cursor=pointer]: visibility
      - button "Signup" [ref=e109]
      - generic [ref=e113] [cursor=pointer]:
        - text: Already have an account?
        - generic [ref=e114]: Login
```